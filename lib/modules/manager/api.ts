import * as ansible from './ansible';
import * as ansibleGalaxy from './ansible-galaxy';
import * as argoCD from './argocd';
import * as asdf from './asdf';
import * as azurePipelines from './azure-pipelines';
import * as batect from './batect';
import * as batectWrapper from './batect-wrapper';
import * as bazel from './bazel';
import * as bazelisk from './bazelisk';
import * as bitbucketPipelines from './bitbucket-pipelines';
import * as buildkite from './buildkite';
import * as bundler from './bundler';
import * as cake from './cake';
import * as cargo from './cargo';
import * as cdnurl from './cdnurl';
import * as circleci from './circleci';
import * as cloudbuild from './cloudbuild';
import * as cocoapods from './cocoapods';
import * as composer from './composer';
import * as conan from './conan';
import * as depsEdn from './deps-edn';
import * as dockerCompose from './docker-compose';
import * as dockerfile from './dockerfile';
import * as droneci from './droneci';
import * as fleet from './fleet';
import * as flux from './flux';
import * as fvm from './fvm';
import * as gitSubmodules from './git-submodules';
import * as githubActions from './github-actions';
import * as gitlabci from './gitlabci';
import * as gitlabciInclude from './gitlabci-include';
import * as gomod from './gomod';
import * as gradle from './gradle';
import * as gradleWrapper from './gradle-wrapper';
import * as helmRequirements from './helm-requirements';
import * as helmValues from './helm-values';
import * as helmfile from './helmfile';
import * as helmsman from './helmsman';
import * as helmv3 from './helmv3';
import * as hermit from './hermit';
import * as homebrew from './homebrew';
import * as html from './html';
import * as jenkins from './jenkins';
import * as jsonnetBundler from './jsonnet-bundler';
import * as kotlinScript from './kotlin-script';
import * as kubernetes from './kubernetes';
import * as kustomize from './kustomize';
import * as leiningen from './leiningen';
import * as maven from './maven';
import * as meteor from './meteor';
import * as mint from './mint';
import * as mix from './mix';
import * as nodenv from './nodenv';
import * as npm from './npm';
import * as nuget from './nuget';
import * as nvm from './nvm';
import * as pipCompile from './pip-compile';
import * as pip_requirements from './pip_requirements';
import * as pip_setup from './pip_setup';
import * as pipenv from './pipenv';
import * as poetry from './poetry';
import * as preCommit from './pre-commit';
import * as pub from './pub';
import * as puppet from './puppet';
import * as pyenv from './pyenv';
import * as regex from './regex';
import * as rubyVersion from './ruby-version';
import * as sbt from './sbt';
import * as setupCfg from './setup-cfg';
import * as swift from './swift';
import * as terraform from './terraform';
import * as terraformVersion from './terraform-version';
import * as terragrunt from './terragrunt';
import * as terragruntVersion from './terragrunt-version';
import * as travis from './travis';
import type { ManagerApi } from './types';
import * as velaci from './velaci';

const api = new Map<string, ManagerApi>();
export default api;

api.set('ansible', ansible);
api.set('ansible-galaxy', ansibleGalaxy);
api.set('argocd', argoCD);
api.set('asdf', asdf);
api.set('azure-pipelines', azurePipelines);
api.set('batect', batect);
api.set('batect-wrapper', batectWrapper);
api.set('bazel', bazel);
api.set('bazelisk', bazelisk);
api.set('bitbucket-pipelines', bitbucketPipelines);
api.set('buildkite', buildkite);
api.set('bundler', bundler);
api.set('cake', cake);
api.set('cargo', cargo);
api.set('cdnurl', cdnurl);
api.set('circleci', circleci);
api.set('cloudbuild', cloudbuild);
api.set('cocoapods', cocoapods);
api.set('composer', composer);
api.set('conan', conan);
api.set('deps-edn', depsEdn);
api.set('docker-compose', dockerCompose);
api.set('dockerfile', dockerfile);
api.set('droneci', droneci);
api.set('fleet', fleet);
api.set('flux', flux);
api.set('fvm', fvm);
api.set('git-submodules', gitSubmodules);
api.set('github-actions', githubActions);
api.set('gitlabci', gitlabci);
api.set('gitlabci-include', gitlabciInclude);
api.set('gomod', gomod);
api.set('gradle', gradle);
api.set('gradle-wrapper', gradleWrapper);
api.set('helm-requirements', helmRequirements);
api.set('helm-values', helmValues);
api.set('helmfile', helmfile);
api.set('helmsman', helmsman);
api.set('helmv3', helmv3);
api.set('hermit', hermit);
api.set('homebrew', homebrew);
api.set('html', html);
api.set('jenkins', jenkins);
api.set('jsonnet-bundler', jsonnetBundler);
api.set('kotlin-script', kotlinScript);
api.set('kubernetes', kubernetes);
api.set('kustomize', kustomize);
api.set('leiningen', leiningen);
api.set('maven', maven);
api.set('meteor', meteor);
api.set('mint', mint);
api.set('mix', mix);
api.set('nodenv', nodenv);
api.set('npm', npm);
api.set('nuget', nuget);
api.set('nvm', nvm);
api.set('pip-compile', pipCompile);
api.set('pip_requirements', pip_requirements);
api.set('pip_setup', pip_setup);
api.set('pipenv', pipenv);
api.set('poetry', poetry);
api.set('pre-commit', preCommit);
api.set('pub', pub);
api.set('puppet', puppet);
api.set('pyenv', pyenv);
api.set('regex', regex);
api.set('ruby-version', rubyVersion);
api.set('sbt', sbt);
api.set('setup-cfg', setupCfg);
api.set('swift', swift);
api.set('terraform', terraform);
api.set('terraform-version', terraformVersion);
api.set('terragrunt', terragrunt);
api.set('terragrunt-version', terragruntVersion);
api.set('travis', travis);
api.set('velaci', velaci);
