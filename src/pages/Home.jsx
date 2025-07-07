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

  if (loading) return <p className="p-4">Cargando pizzas...</p>;

  return (
    <>
      <Header />
      <main className="Cards d-flex p-5 flex-wrap gap-3 justify-content-center">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            img={pizza.img}
            title={`Pizza ${pizza.name}`}
            text={`Ingredientes: 🍕 ${pizza.ingredients.join(", ")}`}
            price={pizza.price}
            button="Ver más"
            button2="Añadir 🛒"
          />
        ))}
      </main>
    </>
  )
}

export default Home;
