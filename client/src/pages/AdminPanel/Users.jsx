import React from "react";

import { Footer, Header, Navbar, Sidebar } from "../../components/AdminPanel";
import { useStateContext } from "../../contexts/ContextProvider";
import UsersModel from "./Users/UsersModel";


const Users = () => {
  const { activeMenu } = useStateContext();

  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "bg-[#f1f3f8] min-h-screen md:ml-72 w-full  "
              : "bg-[#f1f3f8] w-full min-h-screen flex-2 "
          }
        >
          <div>
            <div
              style={{ top: "0" }}
              className="fixed md:static bg-[#f1f3f8] dark:bg-main-dark-bg navbar w-full "
            >
              <Navbar />
            </div>
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
              <UsersModel />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Users;
