import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main className="relative">
    Navbar
    <div className="flex">
        Sidebar
        <section className="flex min-h-screen flex-1 flex-col"> </section>
    </div>
    {children}
    </main>;
};

export default RootLayout;
