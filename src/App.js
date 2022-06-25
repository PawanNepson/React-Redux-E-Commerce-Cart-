import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
