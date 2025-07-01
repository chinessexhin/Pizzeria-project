import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/Cards/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) return <p>Cargando pizzas...</p>;

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
