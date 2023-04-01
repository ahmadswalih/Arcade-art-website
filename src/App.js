import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
