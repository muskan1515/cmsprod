import Link from "next/link";
import { useRouter } from "next/router";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const MyAccount = () => {
  const [userData, setUserData] = useState(null);
  const profileMenuItems = [
    { id: 1, name: "My Profile", ruterPath: "/my-profile" },
    // { id: 2, name: " My Message", ruterPath: "/my-message" },
    // { id: 3, name: " My Favourite", ruterPath: "/my-favourites" },
    // { id: 4, name: " My Package", ruterPath: "/my-package" },
    // { id: 5, name: " Log out", ruterPath: "/login" },
  ];
  const route = useRouter();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("regionType");
    route.push("/login");
  };
  useEffect(() => {
    const data = localStorage.getItem("userInfo");
    const parsedData = JSON.parse(data);
    const username = parsedData[0].Username;
    setUserData(username);
  }, []);

  console.log("Data saved", userData);

  return (
    <>
      <div className="user_set_header">
        <Image
          width={40}
          height={40}
          className="float-start"
          src="/assets/images/team/e1.png"
          alt="e1.png"
        />
        <h3>
          {userData}
          <br />
        </h3>
      </div>
      {/* End user_set_header */}

      <div className="user_setting_content">
        {profileMenuItems.map((item) => (
          <Link
            href={item.ruterPath}
            key={item.id}
            className="dropdown-item"
            style={
              isSinglePageActive(`${item.ruterPath}`, route.pathname)
                ? { color: "#ff5a5f" }
                : undefined
            }
          >
            {item.name}
          </Link>
        ))}
        <div onClick={logoutHandler}>
          <Link key={90} className="dropdown-item" href={""}>
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
