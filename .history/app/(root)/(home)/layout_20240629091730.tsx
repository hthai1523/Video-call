import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main className="relative">
    Navbar
    {children}
    </main>;
};

export default RootLayout;
