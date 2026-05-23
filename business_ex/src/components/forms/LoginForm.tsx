"use client";

import Input from "../UI/Input";
import Button from "../UI/Button";

const LoginForm = () => {
  return (
    <form className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <Input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Password
        </label>

        <Input
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <Button className="w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;