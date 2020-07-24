import reducer, { initialState, dispatchFavourite } from './favorite-products.slice';

describe('favourite products slice reducer', () => {
    it('Add product to favourite', () => {
        // Arrange
        const item = {
            "id": 1,
            "name": "Sprouts",
            "desc": null,
            "price": 88.19
        };

        // Act
        const nextState = reducer(initialState, dispatchFavourite({ item }));

        // Assert
        expect(nextState.list.length).toEqual(1);
        expect(nextState.list).toEqual([
            {
                id: 1,
                name: "Sprouts",
                desc: null,
                price: 88.19
            }]);
    });

    it('Remove product from favourite', () => {
        // Arrange
        const item = {
            "id": 1,
            "name": "Sprouts",
            "desc": null,
            "price": 88.19
        };

        const state = {
            list: [
                {
                    "id": 1,
                    "name": "Sprouts",
                    "desc": null,
                    "price": 88.19
                }
            ]
        }
        // Act
        const nextState = reducer(state, dispatchFavourite({ item }));

        // Assert
        expect(nextState.list.length).toEqual(0);
    });
});
