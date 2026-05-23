import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
   <button
  className={clsx("relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0",
     className
      )}
      {...props}
>
  {children}
</button>


    // <button
    //   className={clsx(
    //     "rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700",
    //     className
    //   )}
    //   {...props}
    // >
    //   {children}
    // </button>
  );
};

export default Button;