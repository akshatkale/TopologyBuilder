"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function readJsonTemplateAndUpdateFields(inputFilePath, outputFilePath, updates) {
    var inputJson = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));
    for (var _i = 0, _a = Object.entries(updates); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        inputJson[key] = value;
    }
    fs.writeFileSync(outputFilePath, JSON.stringify(inputJson));
}
readJsonTemplateAndUpdateFields('/DefaultTemplates/input.json', 'output.json', [
    { name: 'New Name', age: 25 },
    { name1: 'New Name', age: 25 },
]);
//# sourceMappingURL=updatetemplate.js.map