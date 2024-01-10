import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./component/home";
import Skills from "./component/skills";
import Projects from "./component/projects";
import Contacts from "./component/contacts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contacts" element={<Contacts/>} />

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
