            import Link from "next/link";
            import Button from "./UI/Button";

            interface BusinessCardProps {
              id: string;
              businessName: string;
              contactNumber: string;
              discreption: string;
              totalProducts?: number;
              businessImage?: string;
            }

            const BusinessCard = ({
              id,
              businessName,
              contactNumber,
              discreption,
              totalProducts,
              businessImage,
            }: BusinessCardProps) => {
              return (
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  
                  {/* Image Section */}
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl text-black shadow-lg">
                    <img
                      className="h-full w-full object-cover rounded-xl"
                      src={
                        businessImage ||
                        "https://ui-avatars.com/api/?name=Business"
                      }
                      alt={`Business ${businessName}`}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    
                    {/* Business Name */}
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-slate-900">
                      {businessName}
                    </h5>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-600">
                      {discreption}
                    </p>

                    {/* Contact */}
                    <p className="mt-4 text-sm font-medium text-slate-500">
                      Contact: {contactNumber}
                    </p>

                    {/* Product Count */}
                    <p className="mt-2 text-sm font-semibold text-indigo-600">
                      {totalProducts} Products
                    </p>
                  </div>

                  {/* Button */}
                  <div className="p-6 pt-0">
                    <Link href={`/business/${id}`}>
                      <Button>
                        Read more
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            };

            export default BusinessCard;