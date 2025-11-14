import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/common/Loading.jsx";

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/Home.jsx"),
      },
      {
        path: "Agence",
        lazy: () => import("./pages/Agence.jsx"),
      },
      {
        path: "Project",
        lazy: () => import("./pages/Project.jsx"),
      },
      {
        path: "Contact",
        lazy: () => import("./pages/Contact.jsx"),
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Suspense>
  </StrictMode>
);

// npm i gsap
//  npm i @gsap/react
