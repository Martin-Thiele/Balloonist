import "@fontsource/space-mono";
import "@fontsource/plus-jakarta-sans";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Home from "./Containers/Index/Index";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/tasks" element={<Home />} />
        <Route path="/compass" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
