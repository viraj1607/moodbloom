import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Journal from "./pages/Journal";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import JournalEntry from "./pages/JournalEntry";
import CookiJar from "./pages/CookiJar";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:id" element={<JournalEntry />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cookiejar" element={<CookiJar />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
