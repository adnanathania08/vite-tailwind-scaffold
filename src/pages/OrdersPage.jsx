import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const OrderTable = ({}) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const orders = [
    {
      id: "001",
      date: "2024-03-10",
      email: "john.doe@example.com",
      shipment: "Shipped",
      payment: "Paid",
      total: "120.50",
    },
    {
      id: "002",
      date: "2024-03-09",
      email: "jane.smith@example.com",
      shipment: "Delivered",
      payment: "Paid",
      total: "245.75",
    },
    {
      id: "003",
      date: "2024-03-08",
      email: "michael.jordan@example.com",
      shipment: "Pending",
      payment: "Pending",
      total: "89.99",
    },
    {
      id: "004",
      date: "2024-03-07",
      email: "emily.clark@example.com",
      shipment: "Cancelled",
      payment: "Refunded",
      total: "0.00",
    },
    {
      id: "005",
      date: "2024-03-06",
      email: "robert.brown@example.com",
      shipment: "Delivered",
      payment: "Paid",
      total: "310.25",
    },
    {
      id: "006",
      date: "2024-03-05",
      email: "olivia.wilson@example.com",
      shipment: "Shipped",
      payment: "Pending",
      total: "150.00",
    },
    {
      id: "007",
      date: "2024-03-04",
      email: "david.lee@example.com",
      shipment: "Pending",
      payment: "Pending",
      total: "99.99",
    },
    {
      id: "008",
      date: "2024-03-03",
      email: "sophia.jones@example.com",
      shipment: "Shipped",
      payment: "Paid",
      total: "210.00",
    },
    {
      id: "009",
      date: "2024-03-02",
      email: "william.martin@example.com",
      shipment: "Cancelled",
      payment: "Refunded",
      total: "0.00",
    },
    {
      id: "010",
      date: "2024-03-01",
      email: "amelia.white@example.com",
      shipment: "Delivered",
      payment: "Paid",
      total: "175.99",
    },
    {
      id: "011",
      date: "2024-02-29",
      email: "liam.anderson@example.com",
      shipment: "Pending",
      payment: "Paid",
      total: "119.49",
    },
    {
      id: "012",
      date: "2024-02-28",
      email: "charlotte.harris@example.com",
      shipment: "Delivered",
      payment: "Paid",
      total: "250.75",
    },
    {
      id: "013",
      date: "2024-02-27",
      email: "ethan.miller@example.com",
      shipment: "Shipped",
      payment: "Paid",
      total: "195.25",
    },
    {
      id: "014",
      date: "2024-02-26",
      email: "mia.moore@example.com",
      shipment: "Pending",
      payment: "Pending",
      total: "89.99",
    },
    {
      id: "015",
      date: "2024-02-25",
      email: "noah.thomas@example.com",
      shipment: "Delivered",
      payment: "Paid",
      total: "330.50",
    },
  ];
  const filteredOrders = orders?.filter((order) => {
    const searchTerm = search.toLowerCase();
    const matchesSearch =
      order.id.toString().includes(searchTerm) ||
      order.email.toLowerCase().includes(searchTerm) ||
      order.date.toLowerCase().includes(searchTerm) ||
      order.shipment.toLowerCase().includes(searchTerm) ||
      order.payment.toLowerCase().includes(searchTerm) ||
      order.total.toString().includes(searchTerm);

    const matchesFilter = filter
      ? order.payment === filter || order.shipment === filter
      : true;

    return matchesSearch && matchesFilter;
  });
  return (
    <>
      <div className=" text-2xl font-bold px-6 pt-6">Orders</div>
      <div className="border border-gray-200 rounded-lg shadow-md bg-white m-4">
        {/* Header: Search & Filters */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Order ID, Email, Date, Status..."
              value={search}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border rounded-md text-gray-700 focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex gap-4 text-black">
            <button
              className="border px-4 py-2 rounded-md text-blue-600 hover:text-blue-800"
              onClick={() => setFilter("")} // ✅ Reset filter to show all orders
            >
              Clear Filter
            </button>
          </div>
          <div className="p-6">
            {/* Filter Dropdown */}
            <div className="mb-4">
              <select
                className="border px-4 py-2 rounded-md text-gray-700"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Paid">Approved (Paid)</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Refunded">Refunded</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="w-full overflow-auto max-h-[490px] border-t border-gray-200">
          <table className="w-full">
            <thead className="sticky top-0 bg-gray-100 shadow">
              <tr className="text-left text-gray-700">
                <th className="p-3">ORDER NUMBER</th>
                <th className="p-3">DATE</th>
                <th className="p-3">CUSTOMER EMAIL</th>
                <th className="p-3">SHIPMENT STATUS</th>
                <th className="p-3">PAYMENT STATUS</th>
                <th className="p-3">TOTAL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders
                ?.filter((order) => {
                  const matchesSearch = order.email
                    .toLowerCase()
                    .includes(search.toLowerCase());
                  const matchesFilter =
                    filter === "" ||
                    order.shipment === filter ||
                    order.payment === filter;
                  return matchesSearch && matchesFilter;
                })
                .map((order) => (
                  <tr key={order.id} className="text-left hover:bg-gray-50">
                    <td className="p-3 text-blue-600">#{order.id}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">{order.email}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.shipment === "Pending"
                            ? "bg-gray-200 text-gray-700"
                            : order.shipment === "Cancelled"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {order.shipment}
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.payment === "Pending"
                            ? "bg-gray-200 text-gray-700"
                            : order.payment === "Refunded"
                            ? "bg-yellow-200 text-yellow-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {order.payment}
                      </span>
                    </td>
                    <td className="p-3 font-semibold">${order.total}</td>
                  </tr>
                ))}
            </tbody>{" "}
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
