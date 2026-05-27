import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: {
    id: string;
  };
}

const BusinessPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {

  const { id } = await params;

  const business = await prisma.user.findUnique({
    where: {
      id,
    },

    include: {
      products: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!business) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-6xl">
        
        {/* Business Info */}
        <div className="mb-10 rounded-2xl bg-white p-4 shadow-sm">
          
          <div className="flex items-center gap-5">
            <Image
  src={
    business.businessImage ||
    business.image ||
    "https://ui-avatars.com/api/?name=Business"
  }
  alt="Business"
  width={120}
  height={120}
  className="h-28 w-28 rounded-2xl object-cover shadow-md"
/>

            <div>
              <h1 className="text-4xl font-bold">
                {business.businessName ||
                  business.name}
              </h1>

              <p className="mt-2 text-gray-500">
                {business.email}
              </p>

              <p className="mt-1 text-gray-500">
                {business.contactNumber}
              </p>
            </div>
          </div>

          {business.businessDescription && (
            <div className="mt-6">
              <h2 className="mb-2 text-2xl font-semibold">
                About Business
              </h2>

              <p className="text-gray-600">
                {business.businessDescription}
              </p>
            </div>
          )}
        </div>

        {/* Products */}
        <div>
          <h2 className="mb-6 text-3xl font-bold">
            Products
          </h2>

          {business.products.length === 0 ? (
            <div className="rounded-2xl bg-white text-center shadow-sm">
              <p className="text-gray-500">
                No products listed yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4 center">

  {business.products.map(
    (product: any) => (

      <div
        key={product.id}
        className="transition-transform duration-300 hover:-translate-y-1"
      >
        <ProductCard
          name={product.name}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      </div>
    )
  )}
</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;