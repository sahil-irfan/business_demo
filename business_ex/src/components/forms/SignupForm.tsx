"use client";

import Input from "../UI/Input";
import Button from "../UI/Button";

const SignupForm = () => {
  return (
    <form className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Full Name
        </label>

        <Input
          type="text"
          placeholder="Enter your name"
        />
      </div>

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
          placeholder="Create password"
        />
      </div>

      <Button className="w-full">
        Create Account
      </Button>
    </form>
  );
};

export default SignupForm;