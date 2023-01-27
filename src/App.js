import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignIn from "./pages/signin";
import DashboardPage from "./pages/dashboard";
import CategoriesPage from "./pages/categories";
import CategoriesCreate from "./pages/categories/create";
import CategoriesEdit from "./pages/categories/edit";
import { listen } from "./redux/listener";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/categories" element={<CategoriesPage />}></Route>
          <Route
            path="/categories/create"
            element={<CategoriesCreate />}
          ></Route>
          <Route
            path="/categories/edit:id"
            element={<CategoriesEdit />}
          ></Route>
          <Route path="/signin" element={<PageSignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
