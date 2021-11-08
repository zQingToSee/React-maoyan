import { Cell } from "zarm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const List = () => {
  const list = useSelector((state) => state.list); // state是仓库的state，并且具有响应式
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "load",
    });
  }, [dispatch]);

  const remove = (id) => {
    dispatch({
      type: "remove",
      id: id,
    });
  };
  return (
    <>
      {list.map((item) => {
        return (
          <Cell
            key={item.id}
            title={item.name}
            onClick={() => {
              remove(item.id);
            }}
          />
        );
      })}
    </>
  );
};

export default List;
