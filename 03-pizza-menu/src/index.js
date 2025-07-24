import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./components/pizza";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Pizza pizzaName="Focaccia" class="pizza" />
      <Pizza pizzaName="Pizza Funghi" class="pizza" />
      <Pizza pizzaName="Pizza Margherita" class="pizza" />
      <Pizza pizzaName="Pizza Prosciutto" class="pizza" />
      <Pizza pizzaName="Pizza Salamino" class="pizza" />
      <Pizza pizzaName="Pizza Spinaci" class="pizza" />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
