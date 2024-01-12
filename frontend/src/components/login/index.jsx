import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Form from "./Form";
import Image from "next/image";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      {/* <BreadCrumbBanner /> */}

      {/* <!-- Our LogIn Register --> */}
      <section className="our-log bgc-fa mt100 mb100">
        <div className="container">
          <div className="row p-3" style={{backgroundColor:"light"}}>
            <div className="col-sm-12 col-lg-6">
              <div className="login_form  inner_page">
                <Image
                  width={364}
                  height={278}
                  className="img-circle-rounded w100"
                  src="/assets/images/home/11.avif"
                  alt="fp1.jpg"
                />
                {/* <Form /> */}
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="login_form  inner_page">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      {/* <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
