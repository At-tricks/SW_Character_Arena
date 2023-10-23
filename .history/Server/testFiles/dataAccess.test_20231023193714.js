jest.mock('swapi-node', () => {
    return {
        get: jest.fn(),
    };
});