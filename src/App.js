import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/home/index"));
const Detail = lazy(() => import("./pages/detail/index"));
const City = lazy(() => import("./pages/city/index"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/city">
          <City />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
