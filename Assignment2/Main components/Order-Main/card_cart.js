const product = [
    {
        id: 0,
        image:'../../images/menu_img/product0.jpg', 
        title: 'Aggie Blue Mint',
        describe: 'Blue mint ice cream with white chocolate and chocolate cookie pieces.',
        price: 10,
    },
    {
        id: 1,
        image: '../../images/menu_img/product1.jpg',
        title: 'Lemon Custard',
        describe: 'Custard ice cream with a hint of lemon.',
        price: 7,
    },
    {
        id: 2,
        image: '../../images/menu_img/product2.jpg',
        title: 'Orange Sherbet',
        describe: 'Smooth frozen dessert with a delightful orange flavor.',
        price: 12,
    },
    {
        id: 3,
        image: '../../images/menu_img/product3.jpg',
        title: 'Vanila Cream',
        describe: 'Made with real vanilla beans for a smooth, and timeless flavor.',
        price: 12,
    },
    {
        id: 4,
        image: '../../images/menu_img/product4.jpg',
        title: 'Caramel Cashew',
        describe: 'Caramel ice cream with roasted cashews.',
        price: 12,
    },
    {
        id: 5,
        image: '../../images/menu_img/product5.jpg',
        title: 'Cookie Dough',
        describe: 'Cookie dough ice cream with chocolate chip cookie dough pieces.',
        price: 440,
    },
    {
        id: 6,
        image: '../../images/menu_img/product6.jpg',
        title: 'Peach Cobbler',
        describe: 'Peach cobbler ice cream with cheesecake bites and a peach swirl.',
        price: 860,
    },
    {
        id: 7,
        image: '../../images/menu_img/product7.jpg',
        title: 'Chocolate Almond',
        describe: 'Rich and creamy chocolate ice cream with chopped almonds.',
        price: 860,
    },
    {
        id: 8,
        image: '../../images/menu_img/product8.jpg',
        title: 'Huckleberry',
        describe: 'Huckleberry ice cream with a huckleberry swirl.',
        price: 860,
    },
    {
        id: 9,
        image: '../../images/menu_img/product9.jpg',
        title: 'Coconut',
        describe: 'Made with coconut milk or cream, offering a tropical flavor with a hint of smooth texture.',
        price: 440,
    },
    {
        id: 10,
        image: '../../images/menu_img/product10.jpg',
        title: 'Soft Frozen Yogurt',
        describe: 'Tangy, refreshing frozen yogurt ',
        price: 860,
    },
    {
        id: 11,
        image: '../../images/menu_img/product11.jpg',
        title: 'Mochi raspberry',
        describe: ' Filled with creamy raspberry ice cream, blending tart berry flavor with a smooth texture.',
        price: 860,
    }

];

const categories = [...new Set(product.map((item) => {
    return item;
}))];

let i = 0;
document.getElementById('menu').innerHTML = categories.map((item) =>
    {
        var { image, title, describe, price } = item;
        return(

            `
            <div class="cardIce"> 
                <div class="card-image">
                    <img src="${image}" alt="${title}">
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="card-content">
                    <h3>${title}</h3>
                    <p class="describe">${describe}</p>
                    <p class="cardPrice">$${price}</p>` +
                   "<button onclick='addtocart("+(i++)+")'>  Add to Cart  </button>" +
               ` </div>
            </div>`
        )
    }).join('');
    
    var cart =[];

    function addtocart(a) {
        cart.push({...categories[a]});
        //  Using localStorage tp save the current state of the cart to localStorage so that it can be accessed across different pages.
        // using that so the cardMain.html can pass data to bill.html
        localStorage.setItem('cart', JSON.stringify(cart));
        displaycart();
    }

    function delElement(index) {
        // Retrieve the saved cart from localStorage
        let savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        // Remove the item at the given index
        savedCart.splice(index, 1);
        // Update localStorage with the modified cart
        localStorage.setItem('cart', JSON.stringify(savedCart));
        // Update the display to reflect the changes
        displaycart();
    }
    
    

    function displaycart(a){
        // Save the current state of the cart to localStorage so that it can be accessed across different pages.
        // This allows us to persist cart data even if the user navigates to another page, refreshes the current page,
        let savedCart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage
        let j = 0, total= 0;

        if(savedCart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById('total').innerHTML = "$ "+0+" .00";
        }
        else{
            document.getElementById('cartItem').innerHTML =  savedCart.map((items)=>
                {
                    var { image, title,price } = items;
                    total=total+price;
                    document.getElementById('total').innerHTML = "$ "+total+" .00";
                    return(
                        `
                         <div class='cart-item'>
                            <div class='row-img'>
                                <img class='rowimg' src=${image}>
                            </div>
                            <p>${title}</p>
                            <h2>$ ${price}.00</h2>
                            <i class='fa-solid fa-trash' onclick='delElement(" + ${j++}+ ")'></i>
                        </div> `
                    );
                }).join('');
        }
    }
