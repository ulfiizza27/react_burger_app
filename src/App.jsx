import {
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Help from "./pages/help";
import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import OrderPage from "./pages/order";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;