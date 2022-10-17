//  import { Switch, Route, Redirect, Router } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "pages/Landing";
import Profile from "pages/Profile";
import Login from "pages/Login";
import Register from "pages/Register";

import Services from "components/services/Services";
import Group from "components/group/Partners";
import Blog from "components/blog/Blog";

import Cart from "components/cart/Cart";

import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import Akaru from "components/group/Products/Akaru";

import Checkout from "components/Checkout";

import CPrivate from "components/services/spaces/private/Coprivado/CPrivate";
import Cmmunity from "components/services/spaces/private/Comunidad/Cmmunity";
import Ccreative from "components/services/spaces/private/Cocreativo/Ccreative";

import Claborativo from "components/services/spaces/group/Colaborativo/Colab";
import Coemprendedor from "components/services/spaces/group/Coemprende/Coemprende";
import Taller from "components/services/spaces/group/Taller/Taller";
function App() {
  return (
    <Router>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/" component={Landing} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/group" component={Group} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/cart" component={Cart} />
      {/* <Route exact path="/teams" component={Groupal} /> */}
      <Route exact path="/akaru" component={Akaru} />

      <Route exact path="/coprivado" component={CPrivate} />
      <Route exact path="/comunidad" component={Cmmunity} />
      <Route exact path="/cocreativo" component={Ccreative} />

      <Route exact path="/colaborativo" component={Claborativo} />
      <Route exact path="/coemprende" component={Coemprendedor} />
      <Route exact path="/taller" component={Taller} />
    </Router>
  );
}

export default App;

// /virtual
// /laboratorio
// /virtualizacion

// teamEmprendedor
// /teamCorporativo
