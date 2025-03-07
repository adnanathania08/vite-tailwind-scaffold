import { LogOut, User, User2 } from "lucide-react";
import React, { useState } from "react";
import {
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";

const Navbar = ({
  isSidebarOpen,
  setSidebarOpen,
  setProfileMenuOpen,
  isProfileMenuOpen,
}) => {
  const toggleProfileMenu = () => setProfileMenuOpen(!isProfileMenuOpen);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <nav className="relative w-full bg-white shadow-sm flex justify-between items-center p-4">
        <div className="">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-hover text-third rounded-lg"
          >
            {isSidebarOpen ? (
              <BsLayoutSidebarInset size={24} />
            ) : (
              <BsLayoutSidebarInsetReverse size={24} />
            )}
          </button>
        </div>
        <div className="relative">
          <button
            onClick={toggleProfileMenu}
            className="p-2 rounded-full text-whitetext bg-third text-primary"
          >
            <User size={24} />
          </button>
          {isProfileMenuOpen && (
            <div className="absolute  right-0 mt-2 p-2 w-48 border border-gray-200 rounded-lg shadow-lg text-whitetext bg-secondary">
              <div className=" relative">
                <button className="w-full text-left px-4 py-2 flex items-center text- rounded-lg hover:bg-gray-300">
                  <User2 size={16} className="mr-2 " /> Profile
                </button>
              </div>
              <button
                // onClick={logoutHandler}
                className="w-full text-left px-4 py-2 flex items-center text-whitetext hover:bg-gray-300 rounded-lg"
              >
                <LogOut size={16} className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
