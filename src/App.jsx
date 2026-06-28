import { useFetchProducts } from "./hooks/useFetchProducts";
import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const { products, loading, error } = useFetchProducts();
  const { addToCart, totalItems } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10 text-xl text-gray-600">Cargando catálogo...</p>;
  if (error) return <p className="text-center mt-10 text-red-500 font-semibold">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      
     
      <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <h1 className="text-xl font-bold tracking-wider uppercase">Fake Store</h1>
          </div>

          <div className="w-full sm:w-1/3 relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
            />
            <span className="absolute right-3 top-2.5 text-gray-400 text-sm">🔍</span>
          </div>

          <button className="relative bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow">
            <span>Mi Carrito</span>
            <span className="bg-white text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </button>
        </div>
      </header>

     
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">
          {searchTerm ? `Resultados para "${searchTerm}"` : "Catálogo de Productos"}
        </h2>
        
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 my-10">No se encontraron productos que coincidan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
               
                <div className="h-48 w-full flex items-center justify-center bg-white rounded-lg p-2 mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>

                
                <div className="flex-grow">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base mt-2 line-clamp-2 h-12 hover:text-blue-600 transition">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400 font-medium">Precio</span>
                    <span className="text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-gray-900 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm shadow-sm"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      
      <footer className="bg-gray-950 text-gray-400 text-xs py-6 mt-12 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Fake Store Catalog. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition">Soporte</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;