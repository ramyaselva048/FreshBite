/* =========================================
   FRESHBITE - CART JAVASCRIPT
========================================= */


/* =========================================
   CART DATA
========================================= */

let cart =
    JSON.parse(
        localStorage.getItem("freshBiteCart")
    ) || [];


let couponApplied =
    localStorage.getItem(
        "freshBiteCoupon"
    ) === "FRESH10";


const DELIVERY_FEE = 40;


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
   GET CART
========================================= */

function getCart() {

    return cart;

}


/* =========================================
   GET TOTAL ITEMS
========================================= */

function getCartItemCount() {

    return cart.reduce(

        function(total, item) {

            return total +
                Number(
                    item.quantity || 0
                );

        },

        0

    );

}


/* =========================================
   GET SUBTOTAL
========================================= */

function getCartSubtotal() {

    return cart.reduce(

        function(total, item) {

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
   GET DISCOUNT
========================================= */

function getCartDiscount() {

    if (!couponApplied) {

        return 0;

    }


    const subtotal =
        getCartSubtotal();


    return Math.round(
        subtotal * 0.10
    );

}


/* =========================================
   GET DELIVERY FEE
========================================= */

function getCartDeliveryFee() {

    const subtotal =
        getCartSubtotal();


    if (subtotal === 0) {

        return 0;

    }


    if (subtotal >= 500) {

        return 0;

    }


    return DELIVERY_FEE;

}


/* =========================================
   GET GRAND TOTAL
========================================= */

function getCartGrandTotal() {

    const subtotal =
        getCartSubtotal();


    const discount =
        getCartDiscount();


    const delivery =
        getCartDeliveryFee();


    return (
        subtotal -
        discount +
        delivery
    );

}


/* =========================================
   ADD TO CART
========================================= */

function addCartItem(
    product,
    quantity = 1
) {

    if (!product) {

        return false;

    }


    const existingItem =
        cart.find(

            function(item) {

                return Number(item.id)
                    === Number(product.id);

            }

        );


    if (existingItem) {

        existingItem.quantity +=
            Number(quantity);

    } else {

        cart.push({

            id:
                Number(product.id),

            name:
                product.name,

            price:
                Number(product.price),

            restaurant:
                product.restaurant,

            quantity:
                Number(quantity)

        });

    }


    saveCart();

    updateCartCount();

    return true;

}


/* =========================================
   REMOVE CART ITEM
========================================= */

function removeCartItem(
    index
) {

    if (
        index < 0 ||
        index >= cart.length
    ) {

        return;

    }


    cart.splice(
        index,
        1
    );


    saveCart();

    updateCartCount();

    renderCart();

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeCartQuantity(
    index,
    change
) {

    if (!cart[index]) {

        return;

    }


    cart[index].quantity =
        Number(
            cart[index].quantity
        ) +
        Number(change);


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    saveCart();

    updateCartCount();

    renderCart();

}


/* =========================================
   CLEAR CART
========================================= */

function clearCartItems() {

    if (
        cart.length === 0
    ) {

        return;

    }


    const confirmClear =
        confirm(
            "Are you sure you want to clear the cart?"
        );


    if (!confirmClear) {

        return;

    }


    cart = [];

    couponApplied = false;


    localStorage.removeItem(
        "freshBiteCoupon"
    );


    saveCart();

    updateCartCount();

    renderCart();

}


/* =========================================
   APPLY COUPON
========================================= */

function applyCartCoupon() {

    const input =
        document.getElementById(
            "couponInput"
        );


    if (!input) {

        return;

    }


    const coupon =
        input.value
            .trim()
            .toUpperCase();


    if (
        coupon === "FRESH10"
    ) {

        couponApplied = true;


        localStorage.setItem(
            "freshBiteCoupon",
            "FRESH10"
        );


        alert(
            "🎉 FRESH10 applied! 10% discount added."
        );


        renderCart();

        return;

    }


    alert(
        "❌ Invalid coupon code."
    );

}


/* =========================================
   UPDATE CART COUNT
========================================= */

function updateCartCount() {

    const count =
        getCartItemCount();


    document
        .querySelectorAll(
            ".cart-count"
        )
        .forEach(

            function(element) {

                element.textContent =
                    count;

            }

        );

}


/* =========================================
   RENDER CART
========================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartContent"
        );


    if (!container) {

        return;

    }


    if (
        cart.length === 0
    ) {

        container.innerHTML = `

            <div
                class="cart-items-box"
                style="grid-column:1/-1;"
            >

                <div class="empty-cart">

                    <div class="empty-cart-icon">
                        🛒
                    </div>

                    <h2>
                        Your Cart is Empty
                    </h2>

                    <p>
                        Add some delicious food
                        from our menu.
                    </p>

                    <a href="menu.html">
                        Browse Menu →
                    </a>

                </div>

            </div>

        `;

        return;

    }


    const subtotal =
        getCartSubtotal();


    const discount =
        getCartDiscount();


    const delivery =
        getCartDeliveryFee();


    const total =
        getCartGrandTotal();


    container.innerHTML = `

        <!-- CART ITEMS -->

        <div class="cart-items-box">

            <div class="cart-items-header">

                <h2>
                    Cart Items
                </h2>

                <span class="cart-items-count">

                    ${getCartItemCount()}
                    items

                </span>

            </div>


            <div>

                ${cart.map(

                    function(
                        item,
                        index
                    ) {

                        const itemTotal =
                            Number(item.price) *
                            Number(item.quantity);


                        return `

                            <div class="cart-item">

                                <div class="cart-item-image">

                                    <img
                                        src="${getFoodImage(item.name)}"
                                        alt="${item.name}"
                                    >

                                </div>


                                <div class="cart-item-details">

                                    <h3>
                                        ${item.name}
                                    </h3>

                                    <div class="cart-item-restaurant">

                                        ${item.restaurant || "FreshBite"}

                                    </div>

                                    <div class="cart-item-price">

                                        ₹${item.price}
                                        per item

                                    </div>


                                    <div class="quantity-box">

                                        <button
                                            class="quantity-btn"
                                            onclick="changeCartQuantity(${index}, -1)"
                                        >
                                            −
                                        </button>

                                        <span class="quantity-number">

                                            ${item.quantity}

                                        </span>

                                        <button
                                            class="quantity-btn"
                                            onclick="changeCartQuantity(${index}, 1)"
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>


                                <div class="cart-item-right">

                                    <div class="cart-item-total">

                                        ₹${itemTotal}

                                    </div>

                                    <button
                                        class="remove-btn"
                                        onclick="removeCartItem(${index})"
                                    >

                                        🗑 Remove

                                    </button>

                                </div>

                            </div>

                        `;

                    }

                ).join("")}

            </div>


            <div class="clear-cart-row">

                <button
                    class="clear-cart-btn"
                    onclick="clearCartItems()"
                >

                    🧹 Clear Cart

                </button>

            </div>

        </div>



        <!-- ORDER SUMMARY -->

        <aside class="cart-summary">

            <h2>
                Order Summary
            </h2>


            <div class="summary-row">

                <span>
                    Subtotal
                </span>

                <strong>
                    ₹${subtotal}
                </strong>

            </div>


            <div class="summary-row">

                <span>
                    Delivery Fee
                </span>

                <strong>

                    ${
                        delivery === 0
                            ? "FREE"
                            : "₹" + delivery
                    }

                </strong>

            </div>


            <div class="summary-row discount">

                <span>
                    Discount
                </span>

                <strong>

                    ${
                        discount > 0
                            ? "- ₹" + discount
                            : "₹0"
                    }

                </strong>

            </div>


            <div class="delivery-note">

                🚚 Free delivery on orders
                above ₹500.

            </div>


            <div class="coupon-box">

                <input
                    type="text"
                    id="couponInput"
                    placeholder="Coupon code"
                    value="${
                        couponApplied
                            ? "FRESH10"
                            : ""
                    }"
                >

                <button
                    onclick="applyCartCoupon()"
                >
                    Apply
                </button>

            </div>


            ${
                couponApplied
                    ? `
                        <div
                            class="coupon-message"
                            style="display:block;"
                        >
                            🎉 FRESH10 applied!
                        </div>
                    `
                    : ""
            }


            <div class="summary-divider"></div>


            <div class="grand-total">

                <span>
                    Total
                </span>

                <strong>
                    ₹${total}
                </strong>

            </div>


            <a
                href="checkout.html"
                class="checkout-btn"
            >
                Proceed to Checkout →
            </a>


            <a
                href="menu.html"
                class="continue-shopping"
            >
                ← Continue Shopping
            </a>

        </aside>

    `;

}


/* =========================================
   FOOD IMAGE
========================================= */

function getFoodImage(
    name
) {

    const images = {

        "Margherita Pizza":
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80",

        "Pepperoni Pizza":
            "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&q=80",

        "Chicken Burger":
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",

        "Veg Burger":
            "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=300&q=80",

        "Chicken Biryani":
            "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=300&q=80",

        "Paneer Tikka":
            "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=300&q=80",

        "Veg Noodles":
            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80",

        "Chicken Fried Rice":
            "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=300&q=80",

        "Chocolate Cake":
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80",

        "Gulab Jamun":
            "https://images.unsplash.com/photo-1666190094767-7d6e1c6a8c1f?auto=format&fit=crop&w=300&q=80",

        "Fresh Fruit Bowl":
            "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=300&q=80",

        "Mango Smoothie":
            "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=300&q=80"

    };


    return (

        images[name] ||

        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=300&q=80"

    );

}


/* =========================================
   GO TO CHECKOUT
========================================= */

function goToCheckout() {

    if (
        cart.length === 0
    ) {

        alert(
            "🛒 Your cart is empty!"
        );

        return;

    }


    window.location.href =
        "checkout.html";

}


/* =========================================
   INITIALIZE CART
========================================= */

document.addEventListener(

    "DOMContentLoaded",

    function() {

        updateCartCount();

        renderCart();

    }

);
