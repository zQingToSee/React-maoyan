import { NavBar } from "zarm";
import "./index.scss";
import Form from "./components/Form";
import List from "./components/List";

const Movie = () => {
  return (
    <>
      <NavBar title="猫眼电影" />
      <Form />
      <List />
    </>
  );
};

export default Movie;
