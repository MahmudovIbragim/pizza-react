import { Route, Routes } from "react-router-dom";
import Footer from "../../widgets/footer/Footer";
import Header from "../../widgets/header/Header";
import scss from "./Layout.module.scss";
import HomePage from "../../pages/home/HomePage";
import About from "../../pages/about/About";
import AddCard from "../../pages/addCard/AddCard";
import NotFound from "../../pages/not-found/NotFound";
const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<About />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
