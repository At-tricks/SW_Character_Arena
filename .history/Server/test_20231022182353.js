function compareAttributes(character1, character2, attributeValues) {
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

// Utility function to retrieve a nested attribute (e.g., 'homeWorld.diameter')
function getNestedAttribute(object, path) {
    const attributes = path.split('.');
    let value = object;
    for (const attribute of attributes) {
        value = value[attribute];
    }
    return value;
}