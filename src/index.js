import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

// Our main component 
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}


function Header() {

    return (
        <header className="header">
            <h1>Fresh Delicious Pizza Hub</h1>
        </header>
    )

}

function Menu() {
    const pizzas = pizzaData
    const numPizzas = pizzas.length;



    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <p>Authentic Italian Cuisines | 6 Creative Dishes to choose from | All from our oven, all orgnic, all delicious </p>
            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {
                        // lets say we have a list of pizzas from an API; We want to render the list of pizzas as child components ; We simply use the map method
                        pizzaData.map(pizza => // this method will create a copy of the pizzaData array amd for each object in the array, we pass in the props to render a child component
                            <Pizza pizzaObj={pizza} key={pizza.name} //the key property is like an index
                            // name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price}
                            />
                        )
                    }
                </ul>
            ) : <p>We are still working on our menu . Please come back later :)</p>}


        </main>
    )

}

// Pizzza Component

function Pizza({ pizzaObj }) { //destructure the pizza object and render them

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}


function Footer() {

    const hour = new Date().getHours();
    const openHour = 5; // 12 PM
    const closeHour = 22;  // 10 PM
    const isOpen = hour >= openHour && hour <= closeHour;


    // if (hour >= openHour && hour <= closeHour) alert("We are open!"); else alert ("We are closed")
    return (
        <footer className="footer">
            {
                // conditional rendering of order data when shop is opened :
                isOpen ? (
                    <div className="order">
                        <Order closeHour={closeHour} />
                    </div>) : <p> We are happy to welcome and serve you between {openHour}:00 and {closeHour}:00 </p>
            }
        </footer>
    )
}

function Order({ closeHour }) {
    return (
        <>
            <p>We are Open until {closeHour}:00. Come visit us or an order online. </p>
            <button className="btn">Order</button>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)