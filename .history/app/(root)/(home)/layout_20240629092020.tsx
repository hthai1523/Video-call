import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main className="relative">
    Navbar
    .flex>section
    {children}
    </main>;
};

export default RootLayout;
