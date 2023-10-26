import { FC } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Completed from "./pages/Completed";

const App: FC = () => {
  return (
      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </Router>

  );
};

export default App;
