/* =========================================
   FRESHBITE - DATA.JS
========================================= */


/* =========================================
   RESTAURANTS
========================================= */

const restaurants = [

    {
        id: 1,
        name: "Pizza Paradise",
        category: "Pizza",
        rating: 4.8,
        deliveryTime: "25-35 min",
        cuisine: "Italian",

        image:
            "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=700",

        description:
            "Fresh and delicious pizzas made with premium ingredients."
    },


    {
        id: 2,
        name: "Burger House",
        category: "Burgers",
        rating: 4.6,
        deliveryTime: "20-30 min",
        cuisine: "American",

        image:
            "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=700",

        description:
            "Juicy burgers, crispy fries and tasty combos."
    },


    {
        id: 3,
        name: "Spice Hub",
        category: "Indian",
        rating: 4.7,
        deliveryTime: "30-40 min",
        cuisine: "Indian",

        image:
            "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80",

        description:
            "Authentic Indian dishes prepared with aromatic spices."
    },


    {
        id: 4,
        name: "Dragon Wok",
        category: "Chinese",
        rating: 4.5,
        deliveryTime: "25-35 min",
        cuisine: "Chinese",

        image:
            "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",

        description:
            "Delicious Asian meals with fresh ingredients and bold flavours."
    },


    {
        id: 5,
        name: "Sweet Treats",
        category: "Desserts",
        rating: 4.8,
        deliveryTime: "20-30 min",
        cuisine: "Desserts",

        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=700",

        description:
            "Cakes, sweets and delicious desserts for every occasion."
    },


    {
        id: 6,
        name: "Healthy Bites",
        category: "Healthy",
        rating: 4.6,
        deliveryTime: "20-30 min",
        cuisine: "Healthy Food",

        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",

        description:
            "Fresh, healthy and nutritious meals for a balanced lifestyle."
    }

];


/* =========================================
   FOOD ITEMS
========================================= */

const foodItems = [

    /* -----------------------------------------
       1. MARGHERITA PIZZA
    ----------------------------------------- */

    {
        id: 1,

        name: "Margherita Pizza",

        restaurant: "Pizza Paradise",

        restaurantId: 1,

        category: "Pizza",

        price: 299,

        rating: 4.8,

        deliveryTime: "25-35 min",

        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",

        description:
            "Classic Italian pizza topped with fresh tomato, mozzarella cheese and basil.",

        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Fresh basil",
            "Olive oil",
            "Italian herbs"
        ],

        dietary: [
            "Vegetarian"
        ],

        nutrition: {
            calories: "280 kcal",
            protein: "12 g",
            carbs: "36 g",
            fat: "10 g"
        }
    },


    /* -----------------------------------------
       2. CHICKEN BURGER
    ----------------------------------------- */

    {
        id: 2,

        name: "Chicken Burger",

        restaurant: "Burger House",

        restaurantId: 2,

        category: "Burgers",

        price: 199,

        rating: 4.6,

        deliveryTime: "20-30 min",

        image:
            "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=700",

        description:
            "Juicy chicken burger with fresh vegetables, cheese and signature sauce.",

        ingredients: [
            "Chicken patty",
            "Burger bun",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Signature sauce"
        ],

        dietary: [
            "Non-Veg"
        ],

        nutrition: {
            calories: "420 kcal",
            protein: "25 g",
            carbs: "38 g",
            fat: "18 g"
        }
    },


    /* -----------------------------------------
       3. CHICKEN BIRYANI
    ----------------------------------------- */

    {
        id: 3,

        name: "Chicken Biryani",

        restaurant: "Spice Hub",

        restaurantId: 3,

        category: "Indian",

        price: 249,

        rating: 4.7,

        deliveryTime: "30-40 min",

        /*
         * Pexels image
         */

        image:
            "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=700",

        description:
            "Aromatic basmati rice cooked with tender chicken and traditional Indian spices.",

        ingredients: [
            "Basmati rice",
            "Chicken",
            "Onion",
            "Tomato",
            "Ginger garlic",
            "Biryani spices",
            "Fresh herbs"
        ],

        dietary: [
            "Non-Veg",
            "Spicy"
        ],

        nutrition: {
            calories: "510 kcal",
            protein: "28 g",
            carbs: "58 g",
            fat: "17 g"
        }
    },


    /* -----------------------------------------
       4. CHOCOLATE CAKE
    ----------------------------------------- */

    {
        id: 4,

        name: "Chocolate Cake",

        restaurant: "Sweet Treats",

        restaurantId: 5,

        category: "Desserts",

        price: 149,

        rating: 4.8,

        deliveryTime: "20-30 min",

        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",

        description:
            "Soft and delicious chocolate cake with rich chocolate layers.",

        ingredients: [
            "Wheat flour",
            "Cocoa powder",
            "Sugar",
            "Milk",
            "Butter",
            "Chocolate"
        ],

        dietary: [
            "Dessert",
            "Sweet"
        ],

        nutrition: {
            calories: "340 kcal",
            protein: "5 g",
            carbs: "46 g",
            fat: "15 g"
        }
    },


    /* -----------------------------------------
       5. PANEER TIKKA
    ----------------------------------------- */

    {
        id: 5,

        name: "Paneer Tikka",

        restaurant: "Spice Hub",

        restaurantId: 3,

        category: "Indian",

        price: 229,

        rating: 4.7,

        deliveryTime: "30-40 min",

        image:
            "https://pixahive.com/wp-content/uploads/2020/10/Paneer-tikka-135473-pixahive.jpg",

        description:
            "Soft paneer cubes marinated in Indian spices and grilled to perfection.",

        ingredients: [
            "Paneer",
            "Capsicum",
            "Onion",
            "Yogurt",
            "Indian spices",
            "Lemon"
        ],

        dietary: [
            "Vegetarian",
            "Protein Rich"
        ],

        nutrition: {
            calories: "310 kcal",
            protein: "18 g",
            carbs: "12 g",
            fat: "20 g"
        }
    },


    /* -----------------------------------------
       6. VEG NOODLES
    ----------------------------------------- */

    {
        id: 6,

        name: "Veg Noodles",

        restaurant: "Dragon Wok",

        restaurantId: 4,

        category: "Chinese",

        price: 179,

        rating: 4.5,

        deliveryTime: "25-35 min",

        image:
            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",

        description:
            "Stir-fried noodles loaded with fresh vegetables and Asian-style sauce.",

        ingredients: [
            "Noodles",
            "Carrot",
            "Capsicum",
            "Cabbage",
            "Spring onion",
            "Soy sauce"
        ],

        dietary: [
            "Vegetarian"
        ],

        nutrition: {
            calories: "330 kcal",
            protein: "9 g",
            carbs: "48 g",
            fat: "11 g"
        }
    },


    /* -----------------------------------------
       7. CHICKEN FRIED RICE
    ----------------------------------------- */

    {
        id: 7,

        name: "Chicken Fried Rice",

        restaurant: "Dragon Wok",

        restaurantId: 4,

        category: "Chinese",

        price: 219,

        rating: 4.5,

        deliveryTime: "25-35 min",

        image:
            "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",

        description:
            "Flavorful fried rice with chicken, vegetables and aromatic seasonings.",

        ingredients: [
            "Rice",
            "Chicken",
            "Egg",
            "Carrot",
            "Spring onion",
            "Soy sauce"
        ],

        dietary: [
            "Non-Veg"
        ],

        nutrition: {
            calories: "450 kcal",
            protein: "22 g",
            carbs: "52 g",
            fat: "15 g"
        }
    },


    /* -----------------------------------------
       8. FRESH FRUIT BOWL
    ----------------------------------------- */

    {
        id: 8,

        name: "Fresh Fruit Bowl",

        restaurant: "Healthy Bites",

        restaurantId: 6,

        category: "Healthy",

        price: 159,

        rating: 4.6,

        deliveryTime: "20-30 min",

        image:
            "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=80",

        description:
            "A refreshing bowl filled with fresh seasonal fruits.",

        ingredients: [
            "Apple",
            "Banana",
            "Strawberry",
            "Mango",
            "Grapes",
            "Honey"
        ],

        dietary: [
            "Vegetarian",
            "Healthy"
        ],

        nutrition: {
            calories: "180 kcal",
            protein: "3 g",
            carbs: "42 g",
            fat: "2 g"
        }
    },


    /* -----------------------------------------
       9. PEPPERONI PIZZA
    ----------------------------------------- */

    {
        id: 9,

        name: "Pepperoni Pizza",

        restaurant: "Pizza Paradise",

        restaurantId: 1,

        category: "Pizza",

        price: 349,

        rating: 4.7,

        deliveryTime: "25-35 min",

        image:
            "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=700",

        description:
            "Cheesy pizza topped with delicious pepperoni and Italian herbs.",

        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Pepperoni",
            "Italian herbs"
        ],

        dietary: [
            "Non-Veg"
        ],

        nutrition: {
            calories: "390 kcal",
            protein: "20 g",
            carbs: "40 g",
            fat: "19 g"
        }
    },


    /* -----------------------------------------
       10. VEG BURGER
    ----------------------------------------- */

    {
        id: 10,

        name: "Veg Burger",

        restaurant: "Burger House",

        restaurantId: 2,

        category: "Burgers",

        price: 179,

        rating: 4.5,

        deliveryTime: "20-30 min",

        image:
            "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=700",

        description:
            "Crispy vegetable patty burger served with fresh lettuce and creamy sauce.",

        ingredients: [
            "Vegetable patty",
            "Burger bun",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Mayonnaise"
        ],

        dietary: [
            "Vegetarian"
        ],

        nutrition: {
            calories: "360 kcal",
            protein: "10 g",
            carbs: "44 g",
            fat: "14 g"
        }
    },


    /* -----------------------------------------
       11. GULAB JAMUN
    ----------------------------------------- */

    {
        id: 11,

        name: "Gulab Jamun",

        restaurant: "Sweet Treats",

        restaurantId: 5,

        category: "Desserts",

        price: 99,

        rating: 4.7,

        deliveryTime: "20-30 min",

        /*
         * Pexels image used for Indian sweets
         */

        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=700",

        description:
            "Soft and juicy Indian sweet served warm with delicious sugar syrup.",

        ingredients: [
            "Milk solids",
            "Flour",
            "Sugar syrup",
            "Cardamom",
            "Ghee"
        ],

        dietary: [
            "Vegetarian",
            "Dessert"
        ],

        nutrition: {
            calories: "180 kcal",
            protein: "3 g",
            carbs: "28 g",
            fat: "7 g"
        }
    },


    /* -----------------------------------------
       12. MANGO SMOOTHIE
    ----------------------------------------- */

    {
        id: 12,

        name: "Mango Smoothie",

        restaurant: "Healthy Bites",

        restaurantId: 6,

        category: "Healthy",

        price: 129,

        rating: 4.6,

        deliveryTime: "20-30 min",

        image:
            "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=700&q=80",

        description:
            "Creamy and refreshing mango smoothie made with fresh mangoes.",

        ingredients: [
            "Fresh mango",
            "Milk",
            "Honey",
            "Ice"
        ],

        dietary: [
            "Vegetarian",
            "Healthy"
        ],

        nutrition: {
            calories: "210 kcal",
            protein: "6 g",
            carbs: "35 g",
            fat: "5 g"
        }
    }

];


/* =========================================
   HELPER FUNCTIONS
========================================= */


/* Get food by ID */

function getFoodById(id) {

    return foodItems.find(

        function(item) {

            return Number(item.id)
                === Number(id);

        }

    );

}


/* Get restaurant by ID */

function getRestaurantById(id) {

    return restaurants.find(

        function(item) {

            return Number(item.id)
                === Number(id);

        }

    );

}


/* Get foods by category */

function getFoodsByCategory(
    category
) {

    return foodItems.filter(

        function(item) {

            return item.category
                .toLowerCase()
                === category.toLowerCase();

        }

    );

}


/* Get foods by restaurant */

function getFoodsByRestaurant(
    restaurantId
) {

    return foodItems.filter(

        function(item) {

            return Number(
                item.restaurantId
            )
            ===
            Number(
                restaurantId
            );

        }

    );

}


/* Search foods */

function searchFoods(
    keyword
) {

    keyword =
        keyword
            .toLowerCase()
            .trim();


    if (!keyword) {

        return foodItems;

    }


    return foodItems.filter(

        function(item) {

            return (

                item.name
                    .toLowerCase()
                    .includes(keyword)

                ||

                item.category
                    .toLowerCase()
                    .includes(keyword)

                ||

                item.restaurant
                    .toLowerCase()
                    .includes(keyword)

            );

        }

    );

}
