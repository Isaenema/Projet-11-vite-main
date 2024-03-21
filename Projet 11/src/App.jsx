import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Error from "./pages/Error";
import UserContext from "./context/SignContext";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const { logged } = useContext(UserContext);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!logged ? <Login /> : <Navigate to="/profile" />}
        />
        <Route path="/profile" element={!logged ? <Home /> : <User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
