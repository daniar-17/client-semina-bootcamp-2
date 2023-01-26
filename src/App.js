import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignIn from "./pages/signin";
import DashboardPage from "./pages/dashboard";
import CategoriesPage from "./pages/categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="categories" element={<CategoriesPage />}></Route>
          <Route path="signin" element={<PageSignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
