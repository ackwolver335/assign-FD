// required modules or methods regarding main structure intiation
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// global file based styling
import "./index.css";

// main component file regarding all pages and other sub components
import App from "./App.jsx";

// routes regarding future flags
const router = createBrowserRouter(
    [
        {
            path: "/*",
            element: <App />,
        },
    ],
    {
        future: {
            v7_startTransition: true,
        },
    }
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);