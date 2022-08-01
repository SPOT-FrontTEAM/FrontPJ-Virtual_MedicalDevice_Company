import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// PageRouter
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
