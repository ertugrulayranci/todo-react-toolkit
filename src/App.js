import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Mainpage from "./pages/main-page";
import Todopage from "./pages/todo-page";

function App() {
  return (
    <div className="container py-3">
      <BrowserRouter>
      <Header/>

      
      <Routes>

      <Route index element ={<Mainpage/>} / >

      <Route path="todo" element={<Todopage/>}  />

      
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
