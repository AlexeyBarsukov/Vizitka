import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./components/mainMenu/MainMenu";
import About from "./pages/About";
import { Companies } from "./pages/Companies";
import MyWorks from "./pages/MyWorks";

function App() {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route exact path="/companies" element={<Companies />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/myWorks" element={<MyWorks />} />
      </Routes>
    </>
  );
}

export default App;
