// import CopyrightFooter from "../common/footer/CopyrightFooter";
// import Footer from "../common/footer/Footer";
// import Header from "../common/header/DefaultHeader";
// import MobileMenu from "../common/header/MobileMenu";
// import PopupSignInUp from "../common/PopupSignInUp";
import ErrorPageContent from "./ErrorPageContent";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      {/* <Header /> */}

      {/* <!--  Mobile Menu --> */}
      {/* <MobileMenu /> */}

      {/* <!-- Modal --> */}
      {/* <PopupSignInUp /> */}
      {/* <!-- Our Error Page --> */}
      <section className="" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ErrorPageContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
