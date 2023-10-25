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


        character.birth_year = assignDefaultIfUndefined(character.birth_year, "0");
        character.height = assignDefaultIfUndefined(character.height, "0");
        character.mass = assignDefaultIfUndefined(character.mass, "0");
        character.eye_color = assignDefaultIfUndefined(character.eye_color, "0");
        character.hair_color = assignDefaultIfUndefined(character.hair_color, "0");
