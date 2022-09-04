import { extractPackageFile } from '.';

describe('modules/manager/asdf/extract', () => {
  describe('extractPackageFile()', () => {
    it('returns a result', () => {
      const res = extractPackageFile('nodejs 16.16.0\n');
      expect(res.deps).toEqual([
        {
          currentValue: 'nodejs 16.16.0',
          datasource: 'github-tags',
          depName: 'node',
          packageName: 'nodejs/node',
          versioning: 'node',
        },
      ]);
    });

    it('provides skipReason for lines with unsupported tooling', () => {
      const res = extractPackageFile('unsupported 1.22.5\n');
      expect(res).toEqual({
        deps: [
          {
            depName: 'unsupported',
            skipReason: 'unsupported-datasource',
          },
        ],
      });
    });

    it('only captures the first version', () => {
      const res = extractPackageFile('nodejs 16.16.0 16.15.1\n');
      expect(res).toEqual({
        deps: [
          {
            currentValue: 'nodejs 16.16.0',
            datasource: 'github-tags',
            depName: 'node',
            packageName: 'nodejs/node',
            versioning: 'node',
          },
        ],
      });
    });

    it('ignores supported tooling with ref: versioning', () => {
      const res = extractPackageFile('nodejs ref:234abc4\n');
      expect(res).toBeNull();
    });

    it('ignores supported tooling with path: versioning', () => {
      const res = extractPackageFile('nodejs path:/path/to/tooling\n');
      expect(res).toBeNull();
    });

    it('ignores supported tooling with system versioning', () => {
      const res = extractPackageFile('nodejs system\n');
      expect(res).toBeNull();
    });

    describe('comment handling', () => {
      it('ignores comments at the end of lines', () => {
        const res = extractPackageFile('nodejs 16.16.0 # this is a comment\n');
        expect(res).toEqual({
          deps: [
            {
              currentValue: 'nodejs 16.16.0',
              datasource: 'github-tags',
              depName: 'node',
              packageName: 'nodejs/node',
              versioning: 'node',
            },
          ],
        });
      });

      it('ignores lines that are just comments', () => {
        const res = extractPackageFile('# this is a full line comment\n');
        expect(res).toBeNull();
      });

      it('ignores comments across multiple lines', () => {
        const res = extractPackageFile(
          '# this is a full line comment\nnodejs 16.16.0 # this is a comment\n'
        );
        expect(res).toEqual({
          deps: [
            {
              currentValue: 'nodejs 16.16.0',
              datasource: 'github-tags',
              depName: 'node',
              packageName: 'nodejs/node',
              versioning: 'node',
            },
          ],
        });
      });

      it('ignores supported tooling with a renovate:ignore comment', () => {
        const res = extractPackageFile('nodejs 16.16.0 # renovate:ignore\n');
        expect(res).toEqual({
          deps: [
            {
              currentValue: 'nodejs 16.16.0',
              datasource: 'github-tags',
              depName: 'node',
              packageName: 'nodejs/node',
              versioning: 'node',
              skipReason: 'ignored',
            },
          ],
        });
      });
    });
  });
});
