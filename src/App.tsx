import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import UserPage from "./user";
import UserDetail from "./userdetail";
import PostUser from "./postuser";
import CommentUser from "./comentuser";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/user">User</Link>
      </button>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/user" Component={UserPage}>
          <Route path=":userid" Component={UserDetail}>
            <Route path=":userpost" Component={PostUser} />
            <Route path="comment" Component={CommentUser} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
