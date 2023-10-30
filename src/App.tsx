import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import s from "./App.module.scss";
import Header from "./components/Header/Header";

import Preview from "./components/Preview/Preview";
import PopularFoods from "./popularFoods/PopularFoods";
import Footer from "./components/Footer/Footer";
import Menu from "./components/menu/Menu";
import HotFoods from "./hotfoods/HotFoods";
import Basket from "./pages/Basket";

function App() {
  return (
    <div className={s.wrapper}>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Preview />
              <PopularFoods />
              <Menu />
            </>
          }
        />
        <Route path="/hotFoods" element={<HotFoods />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
