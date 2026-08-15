/* =========================================
   FRESHBITE - MAIN JAVASCRIPT
========================================= */


/* =========================================
   CART
========================================= */

let cart =
    JSON.parse(
        localStorage.getItem("freshBiteCart")
    ) || [];


/* =========================================
   FOOD DATA
========================================= */

const foodItems = {

    1: {
        id: 1,
        name: "Margherita Pizza",
        price: 299,
        restaurant: "Pizza Paradise"
    },

    2: {
        id: 2,
        name: "Chicken Burger",
        price: 199,
        restaurant: "Burger House"
    },

    3: {
        id: 3,
        name: "Chicken Biryani",
        price: 249,
        restaurant: "Spice Hub"
    },

    4: {
        id: 4,
        name: "Chocolate Cake",
        price: 149,
        restaurant: "Sweet Treats"
    },

    5: {
        id: 5,
        name: "Paneer Tikka",
        price: 229,
        restaurant: "Spice Hub"
    },

    6: {
        id: 6,
        name: "Veg Noodles",
        price: 179,
        restaurant: "Dragon Wok"
    },

    7: {
        id: 7,
        name: "Chicken Fried Rice",
        price: 219,
        restaurant: "Dragon Wok"
    },

    8: {
        id: 8,
        name: "Fresh Fruit Bowl",
        price: 159,
        restaurant: "Healthy Bites"
    },

    9: {
        id: 9,
        name: "Pepperoni Pizza",
        price: 349,
        restaurant: "Pizza Paradise"
    },

    10: {
        id: 10,
        name: "Veg Burger",
        price: 179,
        restaurant: "Burger House"
    },

    11: {
        id: 11,
        name: "Chicken Fried Rice",
        price: 219,
        restaurant: "Dragon Wok"
    },

    12: {
        id: 12,
        name: "Gulab Jamun",
        price: 99,
        restaurant: "Sweet Treats"
    },

    13: {
        id: 13,
        name: "Mango Smoothie",
        price: 129,
        restaurant: "Healthy Bites"
    }

};


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "freshBiteCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(id) {

    const food =
        foodItems[id];

    if (!food) {

        console.error(
            "Food item not found:",
            id
        );

        return;

    }


    const existingItem =
        cart.find(
            item =>
                Number(item.id) === Number(id)
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: food.id,

            name: food.name,

            price: food.price,

            restaurant: food.restaurant,

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();


    alert(
        food.name +
        " added to cart! 🛒"
    );

}


/* =========================================
   UPDATE CART COUNT
========================================= */

function updateCartCount() {

    const cartCounts =
        document.querySelectorAll(
            ".cart-count"
        );


    const totalItems =
        cart.reduce(
            (total, item) =>
                total +
                Number(item.quantity || 0),
            0
        );


    cartCounts.forEach(
        function (element) {

            element.textContent =
                totalItems;

        }
    );

}


/* =========================================
   REMOVE CART ITEM
========================================= */

function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                Number(item.id) !== Number(id)
        );


    saveCart();

    updateCartCount();

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(id, change) {

    const item =
        cart.find(
            item =>
                Number(item.id) === Number(id)
        );


    if (!item) {

        return;

    }


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveCart();

    updateCartCount();

}


/* =========================================
   CART TOTAL
========================================= */

function getCartTotal() {

    return cart.reduce(

        function (total, item) {

            return total +
                (
                    Number(item.price) *
                    Number(item.quantity)
                );

        },

        0

    );

}


/* =========================================
   CLEAR CART
========================================= */

function clearCart() {

    cart = [];

    saveCart();

    updateCartCount();

}


/* =========================================
   WISHLIST
========================================= */

function addToWishlist(id) {

    const food =
        foodItems[id];


    if (!food) {

        return;

    }


    let wishlist =
        JSON.parse(
            localStorage.getItem(
                "freshBiteWishlist"
            )
        ) || [];


    const alreadyExists =
        wishlist.some(
            item =>
                Number(item.id) === Number(id)
        );


    if (alreadyExists) {

        alert(
            "❤️ Already in your wishlist!"
        );

        return;

    }


    wishlist.push({

        id: food.id,

        name: food.name,

        price: food.price,

        restaurant: food.restaurant

    });


    localStorage.setItem(

        "freshBiteWishlist",

        JSON.stringify(
            wishlist
        )

    );


    alert(
        food.name +
        " added to wishlist ❤️"
    );

}


/* =========================================
   GET WISHLIST
========================================= */

function getWishlist() {

    return JSON.parse(

        localStorage.getItem(
            "freshBiteWishlist"
        )

    ) || [];

}


/* =========================================
   SEARCH
========================================= */

function setupSearch() {

    const searchInput =
        document.querySelector(
            ".search-input"
        );


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        function () {

            const value =
                searchInput.value
                    .toLowerCase()
                    .trim();


            const cards =
                document.querySelectorAll(
                    ".food-card, .restaurant-card"
                );


            cards.forEach(
                function (card) {

                    const text =
                        card.textContent
                            .toLowerCase();


                    if (
                        text.includes(value)
                    ) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* =========================================
   MOBILE MENU
========================================= */

function setupMobileMenu() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );


    const navMenu =
        document.querySelector(
            ".nav-menu"
        );


    if (
        !menuToggle ||
        !navMenu
    ) {

        return;

    }


    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle(
                "show"
            );

        }
    );

}


/* =========================================
   LOGIN CHECK
========================================= */

function isLoggedIn() {

    return (
        localStorage.getItem(
            "freshBiteLoggedIn"
        ) === "true"
    );

}


/* =========================================
   PROTECT ACCOUNT
========================================= */

function protectAccountPage() {

    const accountPage =
        window.location.pathname
            .toLowerCase()
            .includes(
                "account.html"
            );


    if (
        accountPage &&
        !isLoggedIn()
    ) {

        window.location.href =
            "login.html";

    }

}


/* =========================================
   LOGOUT
========================================= */

function logoutUser() {

    localStorage.removeItem(
        "freshBiteLoggedIn"
    );


    window.location.href =
        "login.html";

}


/* =========================================
   CART PAGE LINK
========================================= */

function goToCart() {

    window.location.href =
        "cart.html";

}


/* =========================================
   CHECKOUT PAGE LINK
========================================= */

function goToCheckout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return;

    }


    window.location.href =
        "checkout.html";

}


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder(orderDetails) {

    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return false;

    }


    const orderId =
        "FB" +
        Date.now()
            .toString()
            .slice(-6);


    const order = {

        orderId:

            orderId,

        items:

            [...cart],

        total:

            getCartTotal(),

        customer:

            orderDetails || {},

        date:

            new Date()
                .toLocaleString(
                    "en-IN"
                )

    };


    localStorage.setItem(

        "freshBiteLastOrder",

        JSON.stringify(
            order
        )

    );


    localStorage.setItem(

        "freshBiteOrders",

        JSON.stringify(

            [

                ...(JSON.parse(

                    localStorage.getItem(
                        "freshBiteOrders"
                    )

                ) || []),

                order

            ]

        )

    );


    clearCart();


    return true;

}


/* =========================================
   FORM VALIDATION
========================================= */

function validateRequiredFields(
    form
) {

    if (!form) {

        return false;

    }


    const fields =
        form.querySelectorAll(
            "input[required], select[required], textarea[required]"
        );


    let valid = true;


    fields.forEach(
        function (field) {

            if (
                !field.value.trim()
            ) {

                field.style.borderColor =
                    "#d9534f";

                valid = false;

            } else {

                field.style.borderColor =
                    "";

            }

        }
    );


    if (!valid) {

        alert(
            "Please fill all required fields."
        );

    }


    return valid;

}


/* =========================================
   UPDATE CART COUNT ON PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartCount();

        setupMobileMenu();

        setupSearch();

        protectAccountPage();

    }
);