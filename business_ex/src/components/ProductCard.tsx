interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductCard = ({
  name,
  description,
  image,
  price,
}: ProductCardProps) => {

  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image Section */}
      <div className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl shadow-lg">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={
            image ||
            "https://ui-avatars.com/api/?name=Product"
          }
          alt={name}
        />
      </div>

      {/* Content Section */}
      <div className="p-6">

        {/* Product Name */}
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-slate-900">
          {name}
        </h2>

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
          {description}
        </p>

        {/* Price */}
        <p className="mt-5 text-2xl font-bold text-indigo-600">
          ₹ {price}
        </p>
      </div>

      
      
    </div>
  );
};

export default ProductCard;