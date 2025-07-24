import { pizzaData } from "../data";

export default function Pizza(props) {
  const pizza = {
    ...pizzaData.find((pizza) => pizza.name === props.pizzaName),
  };

  switch (props.pizzaName) {
    case "Focaccia":
      return (
        <div>
          <h2>{pizza.name}</h2>
          <img src="pizzas/focaccia.jpg" alt="A focaccia pizza"></img>
          <p>{pizza.ingredients}</p>
        </div>
      );

    case "Pizza Funghi":
      return (
        <div>
          <h2>{pizza.name}</h2>
          <img src="pizzas/funghi.jpg" alt="A funghi pizza"></img>
          <p>{pizza.ingredients}</p>
        </div>
      );

    case "Pizza Margherita":
      return (
        <div>
          <h2>{pizza.name}</h2>
          <img src="pizzas/margherita.jpg" alt="A margherita pizza"></img>
          <p>{pizza.ingredients}</p>
        </div>
      );

    case "Pizza Prosciutto":
      return (
        <div>
          <h2>{pizza.name}</h2>
          <img src="pizzas/prosciutto.jpg" alt="A prosciutto pizza"></img>
          <p>{pizza.ingredients}</p>
        </div>
      );

    case "Pizza Salamino":
      return (
        <div>
          <h2>{pizza.name}</h2>
          <img src="pizzas/salamino.jpg" alt="A salamino pizza"></img>
          <p>{pizza.ingredients}</p>
        </div>
      );

    case "Pizza Spinaci":
      return (
        <div>
          <h2>{pizza.name}</h2>
          <img src="pizzas/spinaci.jpg" alt="A spinaci pizza"></img>
          <p>{pizza.ingredients}</p>
        </div>
      );
    default:
      break;
  }
}
