const productCard = () => {
  return (
    <div>
      <div className="w-[372px] h-[372px] bg-white rounded-xl shadow-lg">
        <img
          src="https://via.placeholder.com/372"
          alt="product"
          className="w-full h-[248px] object-cover rounded-t-xl"
        />
        <h1 className="text-lg font-bold text-gray-800 p-4">Product Name</h1>
      </div>
    </div>
  );
};

export default productCard;
