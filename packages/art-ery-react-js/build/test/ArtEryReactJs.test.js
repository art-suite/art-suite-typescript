"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["test", "initArtEry", "createJavaScriptPipeline", "assert", "Object"], [global, require('./StandardImport'), require('./JavaScriptPipelineLib')], (test, initArtEry, createJavaScriptPipeline, assert, Object) => {return test("initArtEry with one class", function() {let models, pipelines, pipelineRegistry, subscriptions; ({models, pipelines, pipelineRegistry, subscriptions} = initArtEry([createJavaScriptPipeline()])); assert.eq(Object.keys(pipelines), ["user"]); assert.eq(Object.keys(models), ["user"]); return assert.eq(Object.keys(subscriptions), ["useUser"]);});});});
//# sourceMappingURL=ArtEryReactJs.test.js.map
