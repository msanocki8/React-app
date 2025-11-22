import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Posts from "./pages/posts";
import Login from "./pages/login";
import PostDetail from "./pages/postdetail/postdetail";
import Nav from "./components/nav/nav";
import Dashboard from "./pages/dashboard/dashboard";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/post/:id" element={<PostDetail />}></Route>
        <Route path="/nwm" element={<Nav />}></Route>
        <Route path="/DashBoard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
