import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (loading) return <p>Cargando pizza...</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="container p-5">
      <h2 className="mb-3">{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} style={{ width: "300px" }} />
      <p className="mt-3"><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <button className="btn btn-primary mt-3">Añadir al carrito 🛒</button>
    </div>
  )
};
export default Pizza;

