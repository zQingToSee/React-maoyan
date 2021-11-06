import { useState } from "react";
import { Input, Cell, Button } from "zarm";
import { useDispatch } from "react-redux";

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    dispatch({
      type: "add",
      payload: {
        name: title,
        id: new Date().getTime(),
      },
    });
    setTitle("");
  };

  return (
    <>
      <Cell title="单行文本">
        <Input
          clearable
          type="text"
          placeholder="请输入"
          value={title}
          onChange={(value) => {
            setTitle(value);
          }}
        />
      </Cell>
      <Button theme="primary" onClick={add}>
        添加
      </Button>
    </>
  );
};

export default Form;
