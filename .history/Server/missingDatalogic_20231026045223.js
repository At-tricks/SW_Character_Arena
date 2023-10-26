function assignDefaultIfUndefined(attribute, defaultValue) {
    if (!attribute || attribute.length === 0) {
        return defaultValue;
    }
    return attribute;
}

async function replaceMissingValues(characterAttributes) {
    const characterAttributesReplaced = new 
    characterAttributes.birth_year = assignDefaultIfUndefined(characterAttributes.birth_year, "0");
    characterAttributes.height = assignDefaultIfUndefined(characterAttributes.height, "0");
    characterAttributes.mass = assignDefaultIfUndefined(characterAttributes.mass, "0");
    characterAttributes.eye_color = assignDefaultIfUndefined(characterAttributes.eye_color, "0");
    characterAttributes.hair_color = assignDefaultIfUndefined(characterAttributes.hair_color, "0");
    return characterAttributes;
};

module.exports = {
    replaceMissingValues,
}
