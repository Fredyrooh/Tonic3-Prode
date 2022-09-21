import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";
import avatar from "../../assets/data/avatar.jpg";
import axios from "axios";
import { BsCardList, BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const logout = await axios.post("/api/user/logout");
      const clear = await sessionStorage.clear();
      const home = await navigate('/')
      const reload = await window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96"
      style={{ zIndex: "100000" }}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="black"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {`${user.name} ${user.lastname}`}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {user.admin ? `Admin` : ""}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </div>
      <div>
        <Link to={user.admin ? "/Admin-Panel" : "/Edit-User"}>
          <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              className=" text-[#03C9D7] bg-[#E5FAFB] text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              <BsPersonCircle />
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200 ">My Profile</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                Account Settings
              </p>
            </div>
          </div>
        </Link>
        {user.admin ? (
          <Link to="/Admin-Panel">
          <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              className=" text-[#FFF4E5] bg-[#FBCD64] text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              <BsCardList />
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200 ">
                Admin Panel
              </p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                Manage your world
              </p>
            </div>
          </div>
        </Link>
        ) : (
          <Link to="/TablePoints-User">
            <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
              <button
                type="button"
                className=" text-[#FFF4E5] bg-[#FBCD64] text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                <BsCardList />
              </button>
              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  Table Points
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Check your position
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="mt-5">
        <button
          className="bg-gray-700 text-white rounded-xl w-full h-10 hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
