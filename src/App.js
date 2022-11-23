import "@fontsource/space-mono";
import "@fontsource/plus-jakarta-sans";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Home from "./Containers/Index/Index";
import { Routes, Route, HashRouter } from "react-router-dom";
import Products from "./Containers/Products/products";
import About from "./Containers/About/about";
import Compass from "./Containers/Compass/compass";

function App() {
  return (
    <HashRouter
    >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/compass" element={<Compass />} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
