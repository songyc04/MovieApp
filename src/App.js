import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

import "./default.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;