import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const Layout = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> <Link to="/users/1">User</Link>{" "}
      <Link to="/about">About</Link>
    </nav>
    <Outlet />
  </main>
);
const Home = () => {
  const [params, setParams] = useSearchParams();
  return (
    <section>
      <p>Home</p>
      <button onClick={() => setParams({ tab: "overview" })}>Set tab</button>
      <p>{params.get("tab") || "No tab"}</p>
    </section>
  );
};
const User = () => <p>User: {useParams().id}</p>;
const About = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/contact", { state: { from: "about" } })}>
      Contact
    </button>
  );
};
const Q304 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users/:id" element={<User />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<p>Contact</p>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default Q304;
