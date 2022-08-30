//  import { Switch, Route, Redirect, Router } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "pages/Landing";
import Profile from "pages/Profile";
import Login from "pages/Login";
import Register from "pages/Register";

import Services from "components/services/Services";
import Group from "components/group/Group";
import Blog from "components/blog/Blog";

import Cart from "components/cart/Cart";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/group" component={Group} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/cart" component={Cart} />
    </Router>
  );
}

export default App;
