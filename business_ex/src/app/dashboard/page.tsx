import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

import { authOptions } from "@/lib/auth";

const DashboardPage = async () => {
  const session = await getServerSession(
    authOptions
  );

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-4xl font-bold">
          Welcome,
          {" "}
          {session.user?.name}
        </h1>

        <p className="mb-8 text-gray-500">
          Manage your business easily.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Add Product */}
          <Link
            href="/dashboard/add-product"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold">
              Add Product
            </h2>

            <p className="mt-2 text-gray-500">
              List a new product.
            </p>
          </Link>

          {/* My Products */}
          <Link
            href="/dashboard/my-products"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold">
              My Products
            </h2>

            <p className="mt-2 text-gray-500">
              View your listed products.
            </p>
          </Link>

          {/* Edit Profile */}
          <Link
            href="/dashboard/edit-profile"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold">
              Edit Profile
            </h2>

            <p className="mt-2 text-gray-500">
              Update business details.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;