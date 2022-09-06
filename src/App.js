import {
  Landing,
  Home,
  Login,
  Register,
  Profile,
  Friends,
  Lendings,
  FriendsLibrary,
  BookDetails,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { useStateContext } from "./lib/context";
import { useNavigate } from "react-router-dom";

function App() {
  const { connected } = useStateContext();
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/lendings" element={<Lendings />} />
        <Route path="/:id" element={<FriendsLibrary />} />
        <Route path="/book-details/:id/:isbn" element={<BookDetails />} />
      </Routes>
      {connected && <Navbar />}
    </div>
  );
}

export default App;
