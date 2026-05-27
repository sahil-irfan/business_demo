import DashboardButton from "@/components/DashboardButton";
import Navbar from "@/components/Navbar";
import SearchBusiness from "@/components/SearchBusiness";

import { prisma } from "@/lib/prisma";

const HomePage = async () => {

  const businesses = await prisma.user.findMany({

  where: {
    products: {
      some: {},
    },
  },

  include: {
    products: true,
  },

  orderBy: {
    createdAt: "desc",
  },
});

  const formattedBusinesses =
    businesses.map((business: any) => ({
      id: business.id,

      businessName:
        business.businessName ||
        business.name ||
        "Unknown Business",

      contactNumber:
        business.contactNumber ||
        "No contact",
      businessImage:
        business.businessImage ||
        business.image ||
        "https://ui-avatars.com/api/?name=Business",

      discreption:
        business.businessDescription ||
        "No description available.",

      totalProducts:
        business.products.length,
    }));

  return (
    <div className="min-h-screen bg-slate-50">

      

      <main className="mx-auto max-w-7xl px-6 py-2 lg:py-16">

       
        {/* Business Grid */}
        <SearchBusiness
          businesses={formattedBusinesses}
        />
        

      </main>
    </div>
  );
};

export default HomePage;