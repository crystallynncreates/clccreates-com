import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
