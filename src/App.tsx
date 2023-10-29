import React from "react";
import s from "./App.module.scss";
import Header from "./components/Header/Header";

import Preview from "./components/Preview/Preview";
import PopularFoods from "./popularFoods/PopularFoods";
import Footer from "./components/Footer/Footer";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Preview />
      <PopularFoods />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
