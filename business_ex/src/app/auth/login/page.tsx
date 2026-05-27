import LoginForm from "@/components/forms/LoginForm";


const LoginPage = () => {
  return (
    <> 
    
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Login
        </h1>

        <LoginForm />
      </div>
    </div>
     </>
  );
};

export default LoginPage;