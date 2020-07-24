import reducer, { initialState, dispatchAddProduct, dispatchRemoveProduct } from './products-basket.slice'

describe('products basket slice reducer', () => {
    it('Add product to empty basket', () => {
        // Arrange
        const item = {
            "id": 1,
            "name": "Sprouts",
            "desc": null,
            "price": 88.19
        };

        // Act
        const nextState = reducer(initialState, dispatchAddProduct({ item }));

        // Assert
        expect(nextState.selectedProducts.length).toEqual(1);
        expect(nextState.selectedProducts).toEqual([{
            id: 1,
            name: "Sprouts",
            desc: null,
            price: 88.19,
            quantity: 1
        }]);
        expect(nextState.totalPrice).toEqual('88.19');

    });

    it('Add product the same product second time to basket', () => {
        // Arrange
        const item = {
            "id": 1,
            "name": "Sprouts",
            "desc": null,
            "price": 88.19
        };

        // item already in basket
        const state = {
            selectedProducts: [{
                id: 1,
                name: "Sprouts",
                desc: null,
                price: 88.19,
                quantity: 1
            }],
            totalPrice: '88.19'
        }
        // Act
        const nextState = reducer(state, dispatchAddProduct({ item }));

        // Assert
        expect(nextState.selectedProducts.length).toEqual(1);
        expect(nextState.selectedProducts).toEqual([{
            id: 1,
            name: "Sprouts",
            desc: null,
            price: 88.19,
            quantity: 2
        }]);
        expect(nextState.totalPrice).toEqual('176.38');
    });

    it('Add different product to basket with one item', () => {
        // Arrange
        const item = {
            "id": 2,
            "name": "Evaporated Milk",
            "desc": "no lactose",
            "price": 53.54
        };

        // item already in basket
        const state = {
            selectedProducts: [{
                id: 1,
                name: "Sprouts",
                desc: null,
                price: 88.19,
                quantity: 2
            }],
            totalPrice: '176.38'
        }
        // Act
        const nextState = reducer(state, dispatchAddProduct({ item }));

        // Assert
        expect(nextState.selectedProducts.length).toEqual(2);
        expect(nextState.selectedProducts).toEqual([
            {
                id: 1,
                name: "Sprouts",
                desc: null,
                price: 88.19,
                quantity: 2
            },
            {
                "id": 2,
                "name": "Evaporated Milk",
                "desc": "no lactose",
                "price": 53.54,
                quantity: 1
            }]);
        expect(nextState.totalPrice).toEqual('229.92');
    });

    it('Remove product entirely from basket when quantity = 1', () => {
        // Arrange
        const item = {
            "id": 2,
            "name": "Evaporated Milk",
            "desc": "no lactose",
            "price": 53.54
        };

        // item already in basket
        const state = {
            selectedProducts: [{
                id: 2,
                name: "Evaporated Milk",
                desc: "no lactose",
                price: 53.54,
                quantity: 1
            }],
            totalPrice: '53.54'
        }
        // Act
        const nextState = reducer(state, dispatchRemoveProduct({ item }));

        // Assert
        expect(nextState.selectedProducts.length).toEqual(0);
        expect(nextState.totalPrice).toEqual('0.00');
    });

    it('Decrease quantity item from basket when quantity > 1', () => {
        // Arrange
        const item = {
            "id": 2,
            "name": "Evaporated Milk",
            "desc": "no lactose",
            "price": 53.54
        };

        // item already in basket
        const state = {
            selectedProducts: [{
                id: 2,
                name: "Evaporated Milk",
                desc: "no lactose",
                price: 53.54,
                quantity: 5
            }],
            totalPrice: '267.70'
        }
        // Act
        const nextState = reducer(state, dispatchRemoveProduct({ item }));

        // Assert
        expect(nextState.selectedProducts.length).toEqual(1);
        expect(nextState.selectedProducts).toEqual([
            {
                "id": 2,
                "name": "Evaporated Milk",
                "desc": "no lactose",
                "price": 53.54,
                quantity: 4
            }]);
        expect(nextState.totalPrice).toEqual('214.16');
    });

    it('Remove one item from basket when more item in basket', () => {
        // Arrange
        const item = {
            "id": 2,
            "name": "Evaporated Milk",
            "desc": "no lactose",
            "price": 53.54
        };

        // item already in basket
        const state = {
            selectedProducts: [
                {
                    id: 2,
                    name: "Evaporated Milk",
                    desc: "no lactose",
                    price: 53.54,
                    quantity: 5
                },
                {
                    id: 1,
                    name: "Sprouts",
                    desc: null,
                    price: 88.19,
                    quantity: 2
                }
            ],
            totalPrice: '444.08'
        }
        // Act
        const nextState = reducer(state, dispatchRemoveProduct({ item }));

        // Assert
        expect(nextState.selectedProducts.length).toEqual(2);
        expect(nextState.selectedProducts).toEqual([
            {
                id: 2,
                name: "Evaporated Milk",
                desc: "no lactose",
                price: 53.54,
                quantity: 4
            },
            {
                id: 1,
                name: "Sprouts",
                desc: null,
                price: 88.19,
                quantity: 2
            }]);
        expect(nextState.totalPrice).toEqual('390.54');
    });
});
