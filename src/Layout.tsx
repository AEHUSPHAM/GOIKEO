import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {BottomNavigation} from "zmp-ui";

const Layout: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string>("sender");
    return <>
        <Outlet/>
        <BottomNavigation fixed
                          defaultActiveKey={"sender"}
                          activeKey={activeKey}
                          style={{
                              position: "fixed",
                              bottom: 0
                          }}
                          onChange={(key) => {
                              console.log(key);
                              setActiveKey(key);
                          }}
        >
            <BottomNavigation.Item key="sender" label={"sender"} linkTo={"/"}/>
            <BottomNavigation.Item key="receiver" label={"receiver"} linkTo={"/receiver"}/>
        </BottomNavigation>
    </>
}

export default Layout;
