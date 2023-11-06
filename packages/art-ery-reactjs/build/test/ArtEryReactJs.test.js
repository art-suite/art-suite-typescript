"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["test", "assert"], [global, require('./StandardImport')], (test, assert) => {return test("foo", function() {return assert.eq(1, 2);});});});
//# sourceMappingURL=ArtEryReactJs.test.js.map
