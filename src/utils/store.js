import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    const productsArray = [
        {
            id: 0,
            name: "Платья",
            products: [
                {
                    id: 0,
                    name: "Платье LUIZAS",
                    img:  "https://garne.com.ua/img/p/full/202/3035202a.jpg",
                    price: "439 грн.",
    
                },
                {
                    id: 1,
                    name: "Платье SONET",
                    img:  "https://garne.com.ua/img/p/full/951/3033951a.jpg",
                    price: "599 грн.",
                   
                },
                {
                    id: 2,
                    name: "Платье VELA",
                    img:  "https://garne.com.ua/img/p/full/032/3035032a.jpg",
                    price: "299 грн.",
                   
                },
                {
                    id: 3,
                    name: "Платье HILLAR",
                    img:  "https://garne.com.ua/img/p/full/158/3035158a.jpg",
                    price: "529 грн.",
                    
                },
                {
                    id: 4,
                    name: "Платье LARA",
                    img:  "https://garne.com.ua/img/p/full/920/3033920a.jpg",
                    price: "800 грн.",
                    
                },
                {
                    id: 5,
                    name: "Платье SUN",
                    img:  "https://garne.com.ua/img/p/full/084/3035084a.jpg",
                    price: "469 грн.",
                    
                },

            ],
        },
        {
            id: 1,
            name: "Костюмы",
            products: [
                {
                    id: 0,
                    name: "Костюм RIMMA",
                    img:  "https://garne.com.ua/img/p/full/218/3035218a.jpg",
                    price: "599 грн.",
                },
                {
                    id: 1,
                    name: "Костюм MIRA",
                    img:  "https://garne.com.ua/img/p/full/638/1606638a.jpg",
                    price: "1149 грн.",
                },
                {
                    id: 2,
                    name: "Костюм DONNA",
                    img:  "https://garne.com.ua/img/p/full/610/3033610a.jpg",
                    price: "299 грн.",
                },
                {
                    id: 3,
                    name: "Костюм GREAT ",
                    img:  "https://garne.com.ua/img/p/full/769/3033769a.jpg",
                    price: "1389 грн.",
                },
            ],
        },
        {
            id: 2,
            name: "Свитера",
            products: [
                {
                    id: 0,
                    name: "Свитер KIRA",
                    img:  "https://garne.com.ua/img/p/full/845/3032845a.jpg",
                    price: "199 грн.",
                },
                {
                    id: 1,
                    name: "Свитер Глитер",
                    img:  "https://garne.com.ua/img/p/full/423/4037423a.jpg",
                    price: "319 грн.",
                },
                {
                    id: 2,
                    name: "Свитер Лена",
                    img:  "https://garne.com.ua/img/p/full/205/4037205a.jpg",
                    price: "279 грн.",
                },
                {
                    id: 3,
                    name: "Свитер голубой",
                    img:  "https://garne.com.ua/img/p/full/362/4037362a.jpg",
                    price: "369 грн.",
                },
                {
                    id: 4,
                    name: "Свитер серый",
                    img:  "https://garne.com.ua/img/p/full/602/4408602a.jpg",
                    price: "441 грн.",
                },
            ],
        },

           {
            id: 3,
            name: "Спортивная одежда",
            products: [
                {
                    id: 0,
                    name: "Костюм  GEN",
                    img:  "https://garne.com.ua/img/p/full/020/9000020a.jpg",
                    price: "1559 грн.",
                },
                {
                    id: 1,
                    name: "Костюм серый",
                    img:  "https://garne.com.ua/img/p/full/005/9000005a.jpg",
                    price: "1219 грн.",
                },
                {
                    id: 2,
                    name: "Костюм Sport",
                    img:  "https://garne.com.ua/img/p/full/006/9000006a.jpg",
                    price: "1219 грн.",
                },
            ],
        },


        {
            id: 4,
            name: "Футболки",
            products: [
                {
                    id: 0,
                    name: "GENERATION",
                    img:  "https://garne.com.ua/img/p/full/314/3035314a.jpg",
                    price: "369 грн.",
                },
                {
                    id: 1,
                    name: "Juliia",
                    img:  "https://garne.com.ua/img/p/full/260/3035260a.jpg",
                    price: "329 грн.",
                },
                {
                    id: 2,
                    name: "Anna",
                    img:  "https://garne.com.ua/img/p/full/217/7775217a.jpg",
                    price: "350 грн.",
                },
                {
                    id: 3,
                    name: "Lace",
                    img:  "https://garne.com.ua/img/p/full/217/3035217a.jpg",
                    price: "339 грн.",
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
