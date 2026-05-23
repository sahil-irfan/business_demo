import SignupForm from "@/components/forms/SignupForm";

const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Create Account
        </h1>

        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;