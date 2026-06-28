import { useNavigate, useParams } from "react-router-dom";

function CategoryFilter() {
  const navigate = useNavigate();
  const { category } = useParams();

  const categories = [
    { name: "Todos", path: "/" },
    { name: "Electrónica", path: "/products/category/electronics" },
    { name: "Joyería", path: "/products/category/jewelery" },
    { name: "Ropa Masculina", path: "/products/category/men's clothing" },
    { name: "Ropa Femenina", path: "/products/category/women's clothing" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((cat) => {
        //--
        const isActive = (!category && cat.path === "/") || (category && cat.path.endsWith(category));
        
        return (
          <button
            key={cat.name}
            onClick={() => navigate(cat.path)}
            className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;