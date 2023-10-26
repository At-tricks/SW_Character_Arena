const attributes = require('./attributeModel');

function assignDefaultIfUndefined(attribute, defaultValue) {
    if (!attribute || attribute.length === 0) {
        return defaultValue;
    }
    return attribute;
}

async function replaceMissingValues(characterAttributes) {
    const characterAttributesReplaced = new attributes(characterAttributes);
    characterAttributesReplaced.birth_year = assignDefaultIfUndefined(characterAttributes.birth_year, "0");
    characterAttributesReplaced.height = assignDefaultIfUndefined(characterAttributes.height, "0");
    characterAttributesReplaced.mass = assignDefaultIfUndefined(characterAttributes.mass, "0");
    characterAttributesReplaced.eye_color = assignDefaultIfUndefined(characterAttributes.eye_color, "0");
    characterAttributesReplaced.hair_color = assignDefaultIfUndefined(characterAttributes.hair_color, "0");
    
    return characterAttributesReplaced;
};

module.exports = {
    replaceMissingValues,
}
