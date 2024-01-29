import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import PolicyDetails from "./PolicyDetails";
import Servey from "./Survey";
import Exemple from "./Exemple";
import Exemple_01 from "./Exemple_01";
import Summary from "./Summary";
import Table from "./Table";
import EditableTable from "./Editable";

const materials = [
  { qty: "12", desc: "12", price: "12" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
];

const PropertyVideo = ({ SomeComponent }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
        allow="picture-in-picture"
      />
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#descriptions"
            role="tab"
          >
            Policy & Vehicle
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            data-bs-toggle="tab"
            href="#description"
            role="tab"
          >
            Survey
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            data-bs-toggle="tab"
            href="#newparts"
            role="tab"
          >
            New Parts
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#labour"
            role="tab"
          >
            Labour
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#summary"
            role="tab"
          >
            Summary & Notes
          </a>
        </li>
      </ul>
      {/* End .nav-tabs */}

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="descriptions"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <PolicyDetails />
              {/* <Image
                width={692}
                height={390}
                className="pro_img  w100 w-100 cover"
                src="/assets/images/background/7.jpg"
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={() => setOpen(true)}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="tab-pane fade show " id="description" role="tabpanel">
          <div className="property_video">
            <div className="thumb">
              <Servey SomeComponent={SomeComponent} />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="newparts"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              {/* <EditableTable /> */}
              {/* <Table data={materials} /> */}
              <Exemple/>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="labour"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Exemple_01 />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="summary"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Summary />
            </div>
          </div>
        </div>
        {/* <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="table"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Table data={materials} />
            </div>
          </div>
        </div> */}
      </div>
      {/* End .tab-conten */}
    </>
  );
};

export default PropertyVideo;
