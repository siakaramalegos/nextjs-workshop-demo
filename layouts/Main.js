import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default ({ children }) => (
  <div>
    <Meta />
    <Nav />
    {children}
  </div>
)
