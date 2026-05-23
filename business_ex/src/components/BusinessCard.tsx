import Link from "next/link";
import Button from "./UI/Button";



interface BusinessCardProps {
  id: string;
  businessName: string;
  contactNumber: string;
  discreption: string;
 
}

const BusinessCard = ({
  id,
  businessName,
  discreption,

}: BusinessCardProps) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl text-white shadow-lg ">
  <img
             className="object-cover w-full rounded-base"
             src="https://flowbite.com/docs/images/blog/image-4.jpg"
             alt=""
          />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {businessName}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {discreption}
    </p>
    
  </div>
  <div className="p-6 pt-0">
    <Link href={`/business/${id}`}>
                 <Button
                  
                 >
                   Read more
              </Button>
              </Link>
  </div>
</div>
        //   <div className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl">
          
        //   <img
        //     className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
        //     src="https://flowbite.com/docs/images/blog/image-4.jpg"
        //     alt=""
        //   />

        //   <div className="flex flex-col justify-between md:p-4 leading-normal">
            
        //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
        //       {businessName}
        //     </h5>

        //     <p className="mb-6 text-body">
        //       In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.
        //     </p>

        //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
        //       Contact: {contactNumber}
        //     </h5>

        //     <div>
        //       <Link href={`/business/${id}`}>
        //         <Button
        //           type="button"
        //           className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        //         >
        //           Read more
        //         </Button>
        //       </Link>
        //     </div>

        //   </div>
        // </div>
  );
};

export default BusinessCard;