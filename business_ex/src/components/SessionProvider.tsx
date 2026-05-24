    "use client";

import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <SessionProvider 
    refetchOnWindowFocus={true}
    refetchInterval={0}
    >
      {children}
    </SessionProvider>
  );
};

export default Provider;