const {
    getAllEyeColors,
    getAllHairColors
} = require('./dataAccess');

function convertAttributesToInt(character) {
    // Convert height, mass and birth_year to integers  (e.g. of Birth year format, "33BBY")
    character.birthYear = parseInt(character.birthYear);
    character.height = parseInt(character.height);
    character.mass = parseInt(character.mass);

    // Convert nested object attributes
    character.homeWorld.diameter = parseInt(character.homeWorld.diameter);
    character.species.lifeSpan = parseInt(character.species.lifeSpan);
    character.vehicles.cargoCapacity = parseInt(character.vehicles.cargoCapacity);

    return character
}

async function convertAttributeValues() {
    // Retrieve available eye colors and hair colors
    const eyeColors = await getAllEyeColors();
    const hairColors = await getAllHairColors();

    // Create objects for eye colors and hair colors
    const eyeColorValues = {};
    const hairColorValues = {};

    // Assign unique integer values to each eye color
    let uniqueValue = 10;
    for (const color of eyeColors) {
        eyeColorValues[color] = uniqueValue;
        uniqueValue += 10; // Increase by 10 for uniqueness
    }

    // Reset unique value
    uniqueValue = 10;

    // Assign unique integer values to each hair color
    for (const color of hairColors) {
        hairColorValues[color] = uniqueValue;
        uniqueValue += 10;
    }

    // Return the objects with assigned values
    return {
        eyeColors: eyeColorValues,
        hairColors: hairColorValues,
    };
};

// Utility function to retrieve a nested attribute (e.g., 'homeWorld.diameter')
function getNestedAttribute(object, path) {
    const attributes = path.split('.');
    let value = object;
    for (const attribute of attributes) {
        value = value[attribute];
    }
    return value;
}

function compareAttributes(character1, character2, colorValueSets) {
    // Initialize results and wins for each character
    const results = {
        character1: {
            wins: 0,
            attributes: {},
        },
        character2: {
            wins: 0,
            attributes: {},
        },
    };

    // Define a comparison configuration object
    const attributeComparisonConfig = {
        birthYear: 'lower', // The lower birth year wins
        height: 'higher', // The higher height wins
        mass: 'higher', // The higher mass wins
        eye_color: 'higher', // The higher eye color wins (using the integer value)
        hair_color: 'higher', // The higher hair color wins (using the integer value)
        'homeWorld.diameter': 'higher', // The higher homeWorld diameter wins
        'species.lifeSpan': 'higher', // The higher species lifeSpan wins
        'vehicles.cargoCapacity': 'higher', // The higher vehicle cargoCapacity wins
    };

    // Convert attribute values to integers using the provided function
    character1 = convertAttributesToInt(character1);
    character2 = convertAttributesToInt(character2);

    // Loop through the attributes defined in the configuration
    for (const attribute in attributeComparisonConfig) {
        const comparisonType = attributeComparisonConfig[attribute];
        const value1 = getNestedAttribute(character1, attribute);
        const value2 = getNestedAttribute(character2, attribute);

        if (comparisonType === 'lower') {
            if (value1 < value2) {
                results.character1.wins++;
                results.character1.attributes[attribute] = 'Win';
                results.character2.attributes[attribute] = 'Lose';
            } else if (value2 < value1) {
                results.character2.wins++;
                results.character1.attributes[attribute] = 'Lose';
                results.character2.attributes[attribute] = 'Win';
            } else {
                results.character1.attributes[attribute] = 'Equal';
                results.character2.attributes[attribute] = 'Equal';
            }
        } else if (comparisonType === 'higher') {
            if (value1 > value2) {
                results.character1.wins++;
                results.character1.attributes[attribute] = 'Win';
                results.character2.attributes[attribute] = 'Lose';
            } else if (value2 > value1) {
                results.character2.wins++;
                results.character1.attributes[attribute] = 'Lose';
                results.character2.attributes[attribute] = 'Win';
            } else {
                results.character1.attributes[attribute] = 'Equal';
                results.character2.attributes[attribute] = 'Equal';
            }
        }
    }
    return results;
}

function calculateOverallWinner(comparisonResult, character1, character2) {
    let character1BetterCount = 0;
    let character2BetterCount = 0;

    for (const attribute in comparisonResult) {
        if (comparisonResult[attribute] === character1.name) {
            character1BetterCount++;
        } else if (comparisonResult[attribute] === character2.name) {
            character2BetterCount++;
        }
    }

    if (character1BetterCount > character2BetterCount) {
        return character1.name;
    } else if (character2BetterCount > character1BetterCount) {
        return character2.name;
    } else {
        return 'Equal';
    }
}

module.exports = {
    convertAttributeValues,
    compareAttributes,
    calculateOverallWinner,
};