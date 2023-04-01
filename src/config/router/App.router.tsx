import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { HomePage } from "../../pages/home/HomePage";
import { InvoiceDetails } from "../../pages/invoice-details/InvoiceDetails";

const router = createBrowserRouter([
  {
    path: "/invoices",
    element: <HomePage />,
  },
  {
    path: "/invoices/:id",
    element: <InvoiceDetails />,
  },
  // Not found route
  {
    path: "*",
    element: <Navigate to="/invoices" replace />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
