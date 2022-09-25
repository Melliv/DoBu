import Layout from "./components/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DeveloperPage from "./pages/DeveloperPage";
import ApartmentPage from "./pages/ApartmentPage";
import Apartments from "./pages/Apartments";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Layout>
        <main>
          <Switch>
            <Route path="/developer" exact component={DeveloperPage} />
            <Route path="/apartment/:id" component={ApartmentPage} />
            <Route path="/apartments" exact component={Apartments} />
          </Switch>
        </main>
      </Layout>
    </Fragment>
  );
}

export default App;
