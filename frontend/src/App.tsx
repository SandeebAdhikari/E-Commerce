import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ProductDetailPage from "./pages/productDetailPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
