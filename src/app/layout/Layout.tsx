import { Route, Routes } from "react-router-dom";
import Footer from "../../widgets/footer/Footer";
import Header from "../../widgets/header/Header";
import scss from "./Layout.module.scss";
import HomePage from "../../pages/home/HomePage";
const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
