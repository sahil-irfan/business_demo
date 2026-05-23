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
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">
          {name}
        </h2>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {description}
        </p>

        <p className="mt-4 text-xl font-semibold text-indigo-600">
          ₹{price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;