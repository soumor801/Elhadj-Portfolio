import { useContext } from "react";
import Contact from "./components/Contact/Contact";
import About from "./components/intro/about/About";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";


const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode && 'white'}}>
    <Toggle/>
    <Intro />
    <About />
    <ProductList />
    <Contact/>
  </div>;
};

export default App;