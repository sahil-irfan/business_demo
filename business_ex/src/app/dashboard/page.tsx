import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-4xl font-bold">
          Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">
              List Product
            </h2>

            <p className="mt-2 text-gray-500">
              Add products to your business.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">
              Edit Profile
            </h2>

            <p className="mt-2 text-gray-500">
              Update business details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;