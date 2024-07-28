import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main className="relative">
    Navbar
    <div className="flex">
        <section className="flex"></section>
    </div>
    {children}
    </main>;
};

export default RootLayout;
