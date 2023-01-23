import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignIn from "./pages/signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>home</>}></Route>
          <Route path="signin" element={<PageSignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
