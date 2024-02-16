import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
// import { content } from "html2canvas/dist/types/css/property-descriptors/content";

const CreateList = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-2 mt-1 mb-2 text-end">
          <label htmlFor="documentType" className="text-dark fw-bold">
            Document Types:
          </label>
        </div>
        <div className="col-lg-3">
          <select id="documentType" className="form-select">
            <option value="showDocument">
              <Link href="">Final Report</Link>
            </option>
            <option value="showInput">RC</option>
            <option value="showInput_01">DL</option>
            <option value="showInput_02">Bill Creation</option>
          </select>
        </div>

        {/* Rest of your content */}
      </div>
    </>
  );
};

export default CreateList;
