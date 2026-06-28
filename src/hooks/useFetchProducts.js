import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Hubo un error al cargar los productos de la API.");
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}