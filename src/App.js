import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { LoginCreate } from "./pages/LoginCreate";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className="app">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastrar" element={<LoginCreate />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
