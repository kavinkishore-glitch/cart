const product_list = [
    {
        "id": 1,
        "image": "https://i.pinimg.com/474x/38/65/94/386594135756b1c8572b20991e9dd963.jpg",
        "price": 70000,
        "name": "Laptop",
        "description": "Laptop computer portable personal computer that features a screen, touchpad, and alphanumeric keyboard."
    },
    {
        "id": 2,
        "image": "https://i.pinimg.com/474x/93/08/9f/93089f446b578c1bef52269e154947c0.jpg",
        "price": 60000,
        "name": "Mobile",
        "description": "A mobile phone is a personal communication device used to receive calls and access the internet."
    },
    {
        "id": 3,
        "image": "https://i.pinimg.com/474x/65/d2/db/65d2db97d7bc94ab02006401b31e8580.jpg",
        "price": 2000,
        "name": "Earbuds",
        "description": "Earbuds are tiny speakers that you wear inside your ears."
    },
    {
        "id":4,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGHBywvJ0WHkJYtR9RO4HnFvSiwpydScqIw&s" ,
        "price":3000,
        "name":"Cables",
        "description":"A cable is a conductor or group of conductors for telecommunication signals from one place to another"
    },

    {
        "id":5,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJt7sl2DpEXoyBg9E0ANxhA6zwhtV1dUrH5g&s",
        "price": 1000,
        "name":"Mouse",
        "description":"A mouse is a small device that a computer user  a desk surface in order to point to a place on a screen",
    },

    {
        "id":6,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2X5O7v4_4k2wYQ36hCq8Sq_s5h1d-ozjgBg&s",
        "price":1500,
        "name":"Keyboard",
         "description":"A keyboard is an input device that allows you to type letters, numbers, and symbols into your computer",
    },
    {
        "id": 7,
        "image": "https://img.freepik.com/premium-photo/colorful-splash-paint-is-shown-with-white-paper-middle_1126821-21863.jpg",
        "price": 5000,
        "name": "Printer",
        "description": "A printer is a device that accepts text and graphics from a computer and transfers them onto paper.",
    },
    {
        "id": 8,
        "image": "https://c4.wallpaperflare.com/wallpaper/823/595/685/psp-play-playstation-joystick-wallpaper-thumb.jpg",
        "price": 3000,
        "name": "Joystick",
        "description": "A joystick is used to control movement or actions of a digital object on a computer screen.",
    },
    {
        "id": 9,
        "image": "https://w0.peakpx.com/wallpaper/274/347/HD-wallpaper-android-chipset-android-chip-cpu.jpg",
        "price": 2000,
        "name": "CPU Card",
        "description": "CPU cards are used to expand memory and speed up applications in a computer system.",
    },
    {
        "id": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN43qS7w94pFHcFKAe51LnROdmso7NpOAXDA&s",
        "price": 1200,
        "name": "Chip",
        "description": "A computer chip is a tiny wafer of semiconducting material with an embedded electronic circuit.",
    },
];

const cart = [];
const productContainer = document.getElementById('product-container');
const cartContainer = document.getElementById('cart-container');
const totalPriceDisplay = document.getElementById('total-price');

// Function to render products
product_list.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product_card');

    const productImg = document.createElement('img');
    productImg.classList.add('product_img');
    productImg.src = product.image;
    productCard.appendChild(productImg);

    const productName = document.createElement('h2');
    productName.classList.add('product_name');
    productName.innerHTML = product.name;
    productCard.appendChild(productName);

    const productPrice = document.createElement('h2');
    productPrice.classList.add('product_price');
    productPrice.innerHTML = `₹${product.price}`;
    productCard.appendChild(productPrice);

    const productDescription = document.createElement('p');
    productDescription.classList.add('product_description');
    productDescription.innerHTML = product.description;
    productCard.appendChild(productDescription);

    const addButton = document.createElement('button');
    addButton.classList.add('product_button1');
    addButton.innerHTML = "Add Product";
    addButton.addEventListener('click', () => {
        addToCart(product);
    });
    productCard.appendChild(addButton);

    productContainer.appendChild(productCard);
});

// Function to add product to cart
function addToCart(product) {
    let cartItem = cart.find(item => item.id === product.id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Function to update cart display and total price
function updateCart() {
    cartContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart_item');
        cartItem.innerHTML = `
            <h3>${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</h3>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalPriceDisplay.innerText = `₹${totalPrice}`;
}

// Function to remove item from cart
function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    updateCart();
}
