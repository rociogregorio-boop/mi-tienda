function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
      <p className="mt-4 text-gray-600 font-medium">Cargando catálogo...</p>
    </div>
  );
}

export default Loading;