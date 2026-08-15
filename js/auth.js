/* =========================================
   FRESHBITE - AUTHENTICATION
   Simulated Authentication using localStorage
========================================= */


/* =========================================
   GET CURRENT USER
========================================= */

function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem("freshBiteUser")
    ) || null;

}


/* =========================================
   CHECK LOGIN STATUS
========================================= */

function isUserLoggedIn() {

    return (
        localStorage.getItem(
            "freshBiteLoggedIn"
        ) === "true"
    );

}


/* =========================================
   REGISTER USER
========================================= */

function registerUser(
    name,
    email,
    phone,
    password
) {

    name = name.trim();
    email = email.trim().toLowerCase();
    phone = phone.trim();


    if (
        !name ||
        !email ||
        !phone ||
        !password
    ) {

        return {
            success: false,
            message:
                "Please fill all required fields."
        };

    }


    if (password.length < 6) {

        return {
            success: false,
            message:
                "Password must contain at least 6 characters."
        };

    }


    const existingUser =
        JSON.parse(
            localStorage.getItem(
                "freshBiteRegisteredUser"
            )
        );


    if (
        existingUser &&
        existingUser.email === email
    ) {

        return {
            success: false,
            message:
                "An account with this email already exists."
        };

    }


    const user = {

        name: name,

        email: email,

        phone: phone,

        password: password,

        createdAt:
            new Date().toLocaleString(
                "en-IN"
            )

    };


    localStorage.setItem(

        "freshBiteRegisteredUser",

        JSON.stringify(user)

    );


    /* Save basic user profile */

    localStorage.setItem(

        "freshBiteUser",

        JSON.stringify({

            name: name,

            email: email,

            phone: phone

        })

    );


    return {

        success: true,

        message:
            "Registration successful!"

    };

}


/* =========================================
   LOGIN USER
========================================= */

function loginUser(
    email,
    password
) {

    email =
        email.trim().toLowerCase();

    password =
        password.trim();


    const registeredUser =
        JSON.parse(
            localStorage.getItem(
                "freshBiteRegisteredUser"
            )
        );


    if (!registeredUser) {

        return {

            success: false,

            message:
                "No account found. Please register first."

        };

    }


    if (
        registeredUser.email !== email
        ||
        registeredUser.password !== password
    ) {

        return {

            success: false,

            message:
                "Invalid email or password."

        };

    }


    /* Login successful */

    localStorage.setItem(

        "freshBiteLoggedIn",

        "true"

    );


    localStorage.setItem(

        "freshBiteUser",

        JSON.stringify({

            name:
                registeredUser.name,

            email:
                registeredUser.email,

            phone:
                registeredUser.phone

        })

    );


    return {

        success: true,

        message:
            "Login successful!"

    };

}


/* =========================================
   LOGOUT
========================================= */

function logoutUser() {

    localStorage.removeItem(
        "freshBiteLoggedIn"
    );


    localStorage.removeItem(
        "freshBiteUser"
    );


    window.location.href =
        "login.html";

}


/* =========================================
   PROTECT ACCOUNT PAGE
========================================= */

function protectAccount() {

    if (
        !isUserLoggedIn()
    ) {

        window.location.href =
            "login.html";

    }

}


/* =========================================
   REDIRECT IF ALREADY LOGGED IN
========================================= */

function redirectIfLoggedIn() {

    if (
        isUserLoggedIn()
    ) {

        window.location.href =
            "account.html";

    }

}


/* =========================================
   LOGIN FORM
========================================= */

function setupLoginForm() {

    const form =
        document.getElementById(
            "loginForm"
        );


    if (!form) {

        return;

    }


    form.addEventListener(

        "submit",

        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value;


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const result =
                loginUser(
                    email,
                    password
                );


            if (
                result.success
            ) {

                alert(
                    "✅ " +
                    result.message
                );


                window.location.href =
                    "account.html";

            } else {

                alert(
                    "❌ " +
                    result.message
                );

            }

        }

    );

}


/* =========================================
   REGISTER FORM
========================================= */

function setupRegisterForm() {

    const form =
        document.getElementById(
            "registerForm"
        );


    if (!form) {

        return;

    }


    form.addEventListener(

        "submit",

        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "registerName"
                ).value;


            const email =
                document.getElementById(
                    "registerEmail"
                ).value;


            const phone =
                document.getElementById(
                    "registerPhone"
                ).value;


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const confirmPasswordElement =
                document.getElementById(
                    "confirmPassword"
                );


            let confirmPassword =
                "";


            if (
                confirmPasswordElement
            ) {

                confirmPassword =
                    confirmPasswordElement.value;

            }


            if (
                confirmPassword &&
                password !== confirmPassword
            ) {

                alert(
                    "❌ Passwords do not match."
                );

                return;

            }


            const result =
                registerUser(
                    name,
                    email,
                    phone,
                    password
                );


            if (
                result.success
            ) {

                alert(
                    "✅ " +
                    result.message
                );


                window.location.href =
                    "login.html";

            } else {

                alert(
                    "❌ " +
                    result.message
                );

            }

        }

    );

}


/* =========================================
   DISPLAY USER INFORMATION
========================================= */

function displayUserInfo() {

    const user =
        getCurrentUser();


    if (!user) {

        return;

    }


    const nameElements =
        document.querySelectorAll(
            ".user-name"
        );


    const emailElements =
        document.querySelectorAll(
            ".user-email"
        );


    const phoneElements =
        document.querySelectorAll(
            ".user-phone"
        );


    nameElements.forEach(
        function(element) {

            element.textContent =
                user.name || "User";

        }
    );


    emailElements.forEach(
        function(element) {

            element.textContent =
                user.email || "";

        }
    );


    phoneElements.forEach(
        function(element) {

            element.textContent =
                user.phone || "";

        }
    );

}


/* =========================================
   AUTH UI
========================================= */

function updateAuthUI() {

    const loggedIn =
        isUserLoggedIn();


    const loginLinks =
        document.querySelectorAll(
            ".login-btn"
        );


    const signupLinks =
        document.querySelectorAll(
            ".signup-btn"
        );


    const logoutButtons =
        document.querySelectorAll(
            ".logout-btn"
        );


    if (loggedIn) {

        loginLinks.forEach(
            function(element) {

                element.style.display =
                    "none";

            }
        );


        signupLinks.forEach(
            function(element) {

                element.style.display =
                    "none";

            }
        );


        logoutButtons.forEach(
            function(element) {

                element.style.display =
                    "";

            }
        );

    } else {

        logoutButtons.forEach(
            function(element) {

                element.style.display =
                    "none";

            }
        );

    }

}


/* =========================================
   INITIALIZE AUTH
========================================= */

document.addEventListener(

    "DOMContentLoaded",

    function() {

        setupLoginForm();

        setupRegisterForm();

        displayUserInfo();

        updateAuthUI();

    }

);
