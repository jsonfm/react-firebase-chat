import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages";
import Login from "./pages/login"


// 
import { RequireAuth } from "./hoc/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>
  }
]);


function App() {

  return (
    <>
      <RequireAuth>
        <RouterProvider router={router} />
      </RequireAuth>
    </>
  )
}

export default App
