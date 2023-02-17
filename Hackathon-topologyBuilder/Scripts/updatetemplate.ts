import * as fs from 'fs';

function readJsonTemplateAndUpdateFields(inputFilePath: string, outputFilePath: string, updates: { [key: string]: any }): void {

    const inputJson = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));

    for (const [key, value] of Object.entries(updates)) {
        inputJson[key] = value;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(inputJson));
}

