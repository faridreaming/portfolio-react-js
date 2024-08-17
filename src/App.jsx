import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter></BrowserRouter>
    </div>
  );
};

export default App;
