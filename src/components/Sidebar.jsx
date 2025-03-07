import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="top-0 left-0 w-64 h-full bg-gray-100 shadow-md z-40">
        <div className="h-[72px] p-4 flex justify-start items-center">
          <h2 className="text-2xl font-bold text-third">MYSHOP</h2>
        </div>
        <ul className="my-1 px-4">
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Dashboard
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            New Product
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            New Coupon
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Products
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Categories
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Collections
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Attributes
          </li>
          <Link
            to={"orders"}
            className="font-medium w-full text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition"
          >
            Orders
          </Link>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Customers
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Coupons
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Pages
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Widgets
          </li>
          <li className="font-medium text-gray-700 hover:bg-gray-300 p-3 rounded-lg cursor-pointer transition">
            Settings
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
