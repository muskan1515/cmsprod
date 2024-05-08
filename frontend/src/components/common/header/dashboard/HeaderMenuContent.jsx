import { useRouter } from "next/router";
import MyAccount from "./MyAccount";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const HeaderMenuContent = ({
  setIsRegionChange,
  isDashboard,
  setSelectedCard,
  setRegionSearchValue,
}) => {
  const route = useRouter();
  const [regionValue, setRegionValue] = useState("");
  const [allListedRegions,setAllListedRegions] = useState([]);

  const [name, setName] = useState("");
  const handlerChangeRegion = (val) => {
    if (isDashboard) {
      setIsRegionChange(true);
    }
    localStorage.setItem("regionType", JSON.stringify(val));
    setRegionValue(val);
    setSelectedCard(1);
    setRegionSearchValue(val);
  };
  useEffect(() => {
    const tempName = JSON.parse(localStorage.getItem("userInfo"));
    setName("");
    console.log(name);
      axios.get("/api/getAllRegions")
      .then((res)=>{
        setAllListedRegions(res.data.data);
      })
      .catch((err)=>{})
  }, []);

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="last">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <select
            style={{ height: "40px" }}
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={regionValue}
            disabled={!isDashboard}
            onChange={(e) => handlerChangeRegion(e.target.value)}
          >
            <option data-tokens="type1" value={""}>
              Select Region
            </option>
            {allListedRegions.map((region,idx)=>{
              return  <option  key={idx} data-tokens="type1" value={region.Region}>
              {region.Region}
            </option>
            })}
          </select>
        </div>
      </li>

      <li className="user_setting mt-2">
        <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <Image
              width={45}
              height={45}
              className="rounded-circle"
              src="data:image/jpeg;base64,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"
              alt="e1.png"
            />
            <span className="dn-1199 ms-1">{name}</span>
          </a>
          <div className="dropdown-menu">
            <MyAccount />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default HeaderMenuContent;
