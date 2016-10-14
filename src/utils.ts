import * as tsc from 'typescript';
import * as path from 'path';

export function getTSConfig(globals) {
  let config = (globals && globals.__TS_CONFIG__) ? globals.__TS_CONFIG__ : undefined;
  if (config === undefined) {
    config = 'tsconfig.json';
  }
  if (typeof config === 'string') {
    config = require(path.resolve(config)).compilerOptions;
  }
  config.module = config.module || tsc.ModuleKind.CommonJS;
  config.jsx = config.jsx || tsc.JsxEmit.React;
  return tsc.convertCompilerOptionsFromJson(config, undefined).options;
}