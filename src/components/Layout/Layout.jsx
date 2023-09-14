import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
