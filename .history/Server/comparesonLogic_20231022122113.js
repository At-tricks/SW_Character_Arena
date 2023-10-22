const {
    getAllEyeColors,
    getAllHairColors
} = require('./dataAccess');

function convertAttributesToInt(character) {
    // Convert birth_year (e.g., "33BBY" to integer)
    character.birthYear = parseInt(character.birthYear);
    // Convert height and mass to integers
    character.height = parseInt(character.height);
    character.mass = parseInt(character.mass);

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

function compareAttributes(character1, character2, eyeColorSet, hairColorSet) {
    const attributes = [
        'birth_year',
        'height',
        'mass',
        'homeworld',
        'species',
        'eye_color',
        'hair_color',
        'vehicles',
    ];

    // Convert birth_year, height, and mass attributes to integers
    character1 = convertAttributesToInt(character1);
    character2 = convertAttributesToInt(character2);

    const result = {};

    for (const attribute of attributes) {
        const value1 = character1[attribute];
        const value2 = character2[attribute];

        if (value1 === value2) {
            result[attribute] = 'Equal';
        } else if (
            (typeof value1 === 'string' && typeof value2 === 'string' && value1 > value2) ||
            (Array.isArray(value1) && Array.isArray(value2) && value1.length > value2.length)
        ) {
            result[attribute] = character1.name;
        } else {
            result[attribute] = character2.name;
        }
    }
    return result;
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
    compareAttributes,
    calculateOverallWinner,
};