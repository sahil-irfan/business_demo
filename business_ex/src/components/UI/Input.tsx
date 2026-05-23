import { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500"
      {...props}
    />
  );
};

export default Input;