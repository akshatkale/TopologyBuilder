import * as fs from 'fs';

function readJsonTemplateAndUpdateFields(inputFilePath: string, outputFilePath: string, updates: { [key: string]: any }): void {

    const inputJson = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));

    for (const [key, value] of Object.entries(updates)) {
        inputJson[key] = value;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(inputJson));
}

function replaceSubscriptionAndResGroups(str: string, newSubscription: string, newResourceGroup: string): string {
    const parts = str.split('/');
    const subscriptionIndex = parts.indexOf('subscriptions');
    const resourceGroupIndex = parts.indexOf('resourceGroups');

    if (subscriptionIndex === -1 || resourceGroupIndex === -1) {
        return str;
    }

    parts[subscriptionIndex + 1] = newSubscription;
    parts[resourceGroupIndex + 1] = newResourceGroup;

    return parts.join('/');
}
