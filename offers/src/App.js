import "./App.css";
import Footer from "./components/includes/Footer";
import Navbar from "./components/includes/Navbar";

import Details from "./pages/details";
import Promotions from "./pages/promotions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
