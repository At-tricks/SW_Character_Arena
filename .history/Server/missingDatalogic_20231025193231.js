const dataAccess = require('./dataAccess')
// Should check if attribute values are missing and relpace the missing values with "0"
/* async function handleMissingAttribute(attribute, getDataFunction) {
    if (!attribute || attribute.length === 0) {
        return "0"
    }
    try {
        // Fetch additional data
        return await getDataFunction(attribute);
    } catch (error) {
        console.error(`Error fetching ${attribute} data:`, error);
        return "0"; // or use a sentinel value
    }
} */

function assignDefaultIfUndefined(attribute, defaultValue) {
    if (!attribute || attribute.length === 0) {
        return defaultValue;
    }
    return attribute;
}

async function replaceMissingValues(characterAttributes) {
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
