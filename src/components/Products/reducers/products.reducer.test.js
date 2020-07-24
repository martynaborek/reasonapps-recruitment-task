import reducer from "./products.reducer";
import { CHANGE_PAGE, SET_SEARCH } from "../types/products-action-types";

describe('product reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                productList: [],
                favouritesList: [],
                productsListToDisplay: [],
                filteredElements: null,
                page: 1,
                itemsPerPage: 20,
                totalElements: 0
            }
        )
    })

    it('should change page to second', () => {
        expect(reducer(
            {
                "productList": [
                    {
                        "id": 1,
                        "name": "Sprouts",
                        "desc": "Brussel",
                        "price": 88.19
                    },
                    {
                        "id": 2,
                        "name": "Evaporated Milk",
                        "desc": "Skim",
                        "price": 53.54
                    },
                    {
                        "id": 3,
                        "name": "Nori Sea Weed",
                        "desc": "Gold Label",
                        "price": 2.42
                    },
                    {
                        "id": 4,
                        "name": "Beef",
                        "desc": "Tenderloin",
                        "price": 67.24
                    },
                    {
                        "id": 5,
                        "name": "Zucchini",
                        "desc": "Mini, Green",
                        "price": 91.16
                    },
                    {
                        "id": 6,
                        "name": "Irish Cream",
                        "desc": "Butterscotch",
                        "price": 62.91
                    },
                    {
                        "id": 7,
                        "name": "Nantucket",
                        "desc": "Carrot Orange",
                        "price": 34.58
                    }
                ],
                "page": 1,
                "itemsPerPage": 5,
                "totalElements": 7
            },
            {
                type: CHANGE_PAGE,
                payload: { page: 2 }
            },
        ).productsListToDisplay).toEqual(
            [
                {
                    "id": 6,
                    "name": "Irish Cream",
                    "desc": "Butterscotch",
                    "price": 62.91
                },
                {
                    "id": 7,
                    "name": "Nantucket",
                    "desc": "Carrot Orange",
                    "price": 34.58
                }
            ]
        )
    })

    it('should show elements with search phrase', () => {
        expect(reducer(
            {
                "productList": [
                    {
                        "id": 1,
                        "name": "Sprouts",
                        "desc": "Brussel",
                        "price": 88.19
                    },
                    {
                        "id": 2,
                        "name": "Evaporated Milk",
                        "desc": "Skim",
                        "price": 53.54
                    },
                    {
                        "id": 3,
                        "name": "Nori Sea Weed",
                        "desc": "Gold Label",
                        "price": 2.42
                    },
                    {
                        "id": 4,
                        "name": "Beef",
                        "desc": "Tenderloin",
                        "price": 67.24
                    },
                    {
                        "id": 5,
                        "name": "Zucchini",
                        "desc": "Mini, Green",
                        "price": 91.16
                    },
                    {
                        "id": 6,
                        "name": "Irish Cream",
                        "desc": "Butterscotch",
                        "price": 62.91
                    },
                    {
                        "id": 7,
                        "name": "Nantucket",
                        "desc": "Carrot Orange",
                        "price": 34.58
                    }
                ],
                "page": 1,
                "itemsPerPage": 5,
                "totalElements": 7
            },
            {
                type: SET_SEARCH,
                payload: { search: 'be' }
            },
        ).productsListToDisplay).toEqual(
            [
                {
                    "id": 3,
                    "name": "Nori Sea Weed",
                    "desc": "Gold Label",
                    "price": 2.42
                },
                {
                    "id": 4,
                    "name": "Beef",
                    "desc": "Tenderloin",
                    "price": 67.24
                }
            ]
        )
    })

    it('should show elements with search phrase when desc is not available in all items', () => {
        expect(reducer(
            {
                "productList": [
                    {
                        "id": 1,
                        "name": "Sprouts",
                        "desc": null,
                        "price": 88.19
                    },
                    {
                        "id": 2,
                        "name": "Evaporated Milk",
                        "desc": null,
                        "price": 53.54
                    },
                    {
                        "id": 3,
                        "name": "Nori Sea Weed",
                        "desc": "Gold Label",
                        "price": 2.42
                    }
                ],
                "page": 1,
                "itemsPerPage": 5,
                "totalElements": 7
            },
            {
                type: SET_SEARCH,
                payload: { search: 'sp' }
            },
        ).productsListToDisplay).toEqual(
            [
                {
                    "id": 1,
                    "name": "Sprouts",
                    "desc": null,
                    "price": 88.19
                }
            ]
        )
    })
})
