import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import { MainNavbar } from "./components/MainNavbar";
import { MainFooter } from "./components/MainFooter";
import Homepage from "./Pages/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <section id="top-section">
          <div className="px-4">
            <div className="border-b py-11">
              <h2 className="text-sm text-center font-semibold">
                Free express shipping within 2-5 business days on all the orders
                worth $350 and above.
              </h2>
            </div>
            <div className="py-5">
              <Link to={"/"}>
                {" "}
                <h1 className="text-center font-bold text-4xl">REDUX</h1>
              </Link>
            </div>
          </div>
        </section>
        <ToastContainer />
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <MainFooter />
      </Router>
    </>
  );
}

export default App;
