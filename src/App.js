import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./component/home";
import Skills from "./component/skills";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />


      </Route>
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
