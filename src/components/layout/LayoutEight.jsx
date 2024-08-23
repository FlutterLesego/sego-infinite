import { Outlet } from "react-router-dom";
import Footer from "../home-one/footer";
import Header from "../coming-soon/Header";
function LayoutEight() {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default LayoutEight;
