import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              
            </>
          }
        ></Route>
       
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router}>
        <Footer />
      </RouterProvider>
    </div>
  );
}

export default App;
