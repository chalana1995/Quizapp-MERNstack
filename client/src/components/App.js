import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root element</div>,
  },
  {
    path: "/quiz",
    element: <div>Quiz element</div>,
  },
  {
    path: "/result",
    element: <div>Result element</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
