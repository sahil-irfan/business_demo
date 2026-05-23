import Navbar from "@/components/Navbar";
import BusinessCard from "@/components/BusinessCard";

const businesses = [
  {
    id: "1",
    businessName: "Tech Store",
    contactNumber: "9876543210",
    discreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    totalProducts: 5,
  },
  {
    id: "2",
    businessName: "Fashion Hub",
    contactNumber: "9123456780",
    discreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    totalProducts: 8,
  },
   {
    id: "3",
    businessName: "Gadget World",
    contactNumber: "9123456780",
    discreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    totalProducts: 8,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-indigo-500 pl-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Partners
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Manage and explore registered businesses within the network.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {businesses.map((business) => (
            <div 
              key={business.id} 
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <BusinessCard
                id={business.id}
                businessName={business.businessName}
                contactNumber={business.contactNumber}
                discreption={business.discreption}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}