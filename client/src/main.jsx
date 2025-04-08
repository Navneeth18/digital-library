import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { UserProvider, useUser } from "./context/UserContext";
import { ResourceProvider } from "./context/ResourceContext";

import Dashboard from "./pages/Dashboard";
import BrowseResource from "./pages/BrowseResource";
import SearchPage from "./pages/SearchPage";
import RequestMaterial from "./pages/RequestMaterial";
// import ViewDetails from "./pages/ViewDetails";
import AuthForm from "./pages/AuthForm";
import RootLayout from "./components/RootLayout";
import ViewResource from "./components/ViewResource";

const browserObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/browse-resource", element: <BrowseResource />
        // children: [{
        //   path: "/view-details", element: <ViewResource/>
        // }]
       },
      { path: "/search", element: <SearchPage /> },
      { path: "/request-material", element: <RequestMaterial /> },
      // { path: "/view-details", element: <ViewResource/> },
      { path: "/auth", element: <AuthForm /> },
    ],
  },
]);

function InnerApp() {
  const { user, loading } = useUser();

  if (loading) return <div className="text-white p-4">Loading user...</div>;

  const role = user?.role || "public";
  console.log("role:", role);

  return (
    <ResourceProvider role={role}>
      <RouterProvider router={browserObj} />
    </ResourceProvider>
  );
}

createRoot(document.getElementById("root")).render(

    <UserProvider>
      <InnerApp />
    </UserProvider>

);
