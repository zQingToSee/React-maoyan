import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon, TabBar } from "zarm";
const TabIcon = Icon.createFromIconfont(
  "//at.alicdn.com/t/font_1340918_mk657pke2hj.js"
);
const MaoyanFooter = () => {
  const history = useHistory();
  const [activeKey, setActiveKey] = useState("movie");

  const handleChange = (value) => {
    setActiveKey(value);
    history.push("/home/" + value);
  };

  return (
    <>
      <TabBar visible={true} activeKey={activeKey} onChange={handleChange}>
        <TabBar.Item
          itemKey="movie"
          title="电影/影院"
          icon={<TabIcon type="home" />}
        />
        <TabBar.Item
          itemKey="video"
          title="视频"
          icon={<TabIcon type="insurance" />}
        />
        <TabBar.Item
          itemKey="mini"
          title="小视频"
          icon={<TabIcon type="user" />}
        />
        <TabBar.Item
          itemKey="show"
          title="演出"
          icon={<TabIcon type="user" />}
        />
        <TabBar.Item
          itemKey="mine"
          title="我的"
          icon={<TabIcon type="user" />}
        />
      </TabBar>
    </>
  );
};

export default MaoyanFooter;
