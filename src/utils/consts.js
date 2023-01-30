const recipes = [
    {
        id: 0,
        value: 'macaron',
        label: 'Macaron',
        components: {
            sugar: 160,
            water: 50,
            eggWhite: 100,
            almondFlour: 150,
            powderedSugar: 150,
            cream: 80,
            whiteChocolate: 230,
            strawberryPuree: 80
        }
    },
    {
        id: 1,
        value: 'strawberryPuree',
        label: 'Strawberry puree',
        components: {
            strawberry: 80
        }
    }
]

const products = {
    sugar: {
        label: "Sugar",
        type: "g",
        price: 0.17
    },
    water: {
        label: "Water",
        type: "ml",
        price: 0
    },
    powderedSugar: {
        label: "Powdered sugar",
        type: "g",
        price: 0.17
    },
    eggWhite: {
        label: "Egg white",
        type: "g",
        price: 0.5
    },
    almondFlour: {
        label: "Almond flour",
        type: "g",
        price: 3.12
    },
    cream: {
        label: "Cream 30%",
        type: "g",
        price: 0.6
    },
    whiteChocolate: {
        label: "White chocolate",
        type: "g",
        price: 2.99
    },
    strawberry: {
        label: "Strawberry",
        type: "g",
        price: 1.65
    }
}

export {
    recipes,
    products
}