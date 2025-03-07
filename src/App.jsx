import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home/HomePage";
import Layout from "./Layout";
import OrdersPage from "./pages/OrdersPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            // <AuthGuard>
            <HomePage />
            // </AuthGuard>
          ),
        },
        {
          path: "orders",
          element: <OrdersPage />,
        },
        // { path: "chat/:chatId", element: <IndividualChatPage /> },
      ],
    },
    // { path: "/auth", element: <AuthPage /> },
    // {
    //   path: "/profile",
    //   element: (
    //     <AuthGuard>
    //       <ProfilePage />
    //     </AuthGuard>
    //   ),
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
