import { Routes, Route } from "react-router-dom";

import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";

import "./styles/app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
