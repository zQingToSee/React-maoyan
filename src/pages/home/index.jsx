import React, { useEffect, lazy } from "react";
import { ratedListApi } from "../../utils/api";
import MaoyanFooter from "./components/MaoyanFooter";
import { Route, Switch } from "react-router-dom";
const Movie = lazy(() => import("./movies/index"));
const Video = lazy(() => import("./videos/index"));
const Show = lazy(() => import("./show/index"));
const Mini = lazy(() => import("./mini/index"));
const Mine = lazy(() => import("./mine/index"));
const Home = () => {
  // 这里做数据请求
  useEffect(() => {
    (async () => {
      const res = await ratedListApi();
      console.log(res);
    })();
  }, []);
  return (
    <>
      <Switch>
        <Route path="/home/movie">
          <Movie />
        </Route>
        <Route path="/home/video">
          <Video />
        </Route>
        <Route path="/home/show">
          <Show />
        </Route>
        <Route path="/home/mini">
          <Mini />
        </Route>
        <Route path="/home/mine">
          <Mine />
        </Route>
      </Switch>
      <MaoyanFooter />
    </>
  );
};

export default Home;
