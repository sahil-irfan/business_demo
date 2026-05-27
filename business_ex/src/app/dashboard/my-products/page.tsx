import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const MyProductsPage = async () => {
  const session = await getServerSession(
    authOptions
  );
 
  if (!session?.user?.email) {
    redirect("/auth/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    redirect("/auth/login");
  }

  const products = await prisma.product.findMany({
    where: {
      userId: user.id,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-6xl">
        
        <h1 className="mb-8 text-4xl font-bold">
          My Products
        </h1>

        {products.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold">
              No Products Yet
            </h2>

            <p className="mt-2 text-gray-500">
              Start by adding your first product.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4 center">
  
  {products.map((product: any) => (
    
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
  ))}
</div>
               
        )}
      </div>
    </div>
  );
};

export default MyProductsPage;