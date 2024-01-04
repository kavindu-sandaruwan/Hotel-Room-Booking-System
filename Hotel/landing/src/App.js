import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import RoomBooking from "./pages/roomBooking/RoomBooking";
import Review from "./pages/review/Review";
import List from "./pages/roomBooking/RoomBooking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/hotels/:id" element={<List/>} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
