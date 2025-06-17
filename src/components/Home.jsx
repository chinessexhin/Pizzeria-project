import Header from "./Header"
import CardPizza from "./Cards/CardPizza"
import { pizzas } from "./Cards/pizzas"

const Home = () => {
  return (
    <>
      <Header />
      <main className="Cards d-flex p-5 flex-wrap gap-3">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            className="card"
            style={{ width: "14rem" }}
            img={pizza.img}
            title={`Pizza ${pizza.name}`}
            text={`Ingredientes: 🍕 ${pizza.ingredients.join(", ")}`}
            price={`Precio: $${pizza.price.toLocaleString()}`}
            button="Ver más"
            button2="Añadir 🛒"
          />
        ))}
      </main>
    </>
  )
}

export default Home;
