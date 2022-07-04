import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
