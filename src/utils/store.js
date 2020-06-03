import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    const productsArray = [
        {
            id: 0,
            name: "Одежда",
            products: [
                {
                    id: 0,
                    name: "Платье",
                    price: "500 грн.",
                },
                {
                    id: 1,
                    name: "Костюм",
                    price: "1680 грн.",
                },
                {
                    id: 2,
                    name: "Блуза",
                    price: "670 грн.",
                },
                {
                    id: 3,
                    name: "Юбка",
                    price: "450 грн.",
                },
                {
                    id: 4,
                    name: "Брюки",
                    price: "800 грн.",
                },
                {
                    id: 5,
                    name: "Сарафан",
                    price: "1200 грн.",
                },

            ],
        },
        {
            id: 1,
            name: "Верхняя одежда",
            products: [
                {
                    id: 0,
                    name: "Пальто",
                    price: "2500 грн.",
                },
                {
                    id: 1,
                    name: "Куртка",
                    price: "1500 грн.",
                },
                {
                    id: 2,
                    name: "Дубленка",
                    price: "6000 грн.",
                },
                {
                    id: 3,
                    name: "Шуба",
                    price: "5000 грн.",
                },
            ],
        },
        {
            id: 2,
            name: "Обувь",
            products: [
                {
                    id: 0,
                    name: "Туфли",
                    price: "700 грн.",
                },
                {
                    id: 1,
                    name: "Босоножки",
                    price: "700 грн.",
                },
                {
                    id: 2,
                    name: "Кроссовки",
                    price: "1200 грн.",
                },
                {
                    id: 3,
                    name: "Слипоны",
                    price: "890 грн.",
                },
                {
                    id: 4,
                    name: "Ботинки",
                    price: "2500 грн.",
                },
            ],
        },

           {
            id: 3,
            name: "Сумки",
            products: [
                {
                    id: 0,
                    name: "Клач",
                    price: "700 грн.",
                },
                {
                    id: 1,
                    name: "Рюкзак",
                    price: "890 грн.",
                },
                {
                    id: 2,
                    name: "Спортивная сумка",
                    price: "400 грн.",
                },
            ],
        },


        {
            id: 4,
            name: "Аксессуары",
            products: [
                {
                    id: 0,
                    name: "Ремень",
                    price: "250 грн.",
                },
                {
                    id: 1,
                    name: "Бижутерия",
                    price: "150 грн.",
                },
                {
                    id: 2,
                    name: "Шапка",
                    price: "350 грн.",
                },
                {
                    id: 3,
                    name: "Шарф",
                    price: "280 грн.",
                },
            ],
        },


    ];

    const [products, setProducts] = React.useState(productsArray);

    const store = {
        products: [products, setProducts]
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
