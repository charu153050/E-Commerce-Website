import logo from "./logo.svg";
import "./App.css";

import { AddProduct } from "./Components/AddProduct";
import { HomePage } from "./Components/HomePage";
import { ContactUs } from "./Components/ContactUs";
import { AboutUs } from "./Components/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/addproduct" element={<AddProduct />}></Route>
            <Route exact path="/contactus" element={<ContactUs />}></Route>
            <Route exact path="/aboutus" element={<AboutUs />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
