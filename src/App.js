import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import Register from "./screens/Register";
import ProductPage from "./screens/ProductPage";
import AdminSignin from "./screens/AdminSignin";
import ProductDetailPage from "./screens/ProductDetailPage";
import RegisterAdmin from "./screens/RegisterAdmin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerAdmin" element={<RegisterAdmin />} />
        <Route path="/adminLogin" element={<AdminSignin />} />
        <Route path="/salads" element={<ProductPage />} />
        <Route path="/salads/detail" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
