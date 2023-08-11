import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {BottomNavigation} from "zmp-ui";

const Layout: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string>("sender");
    return <>
        <Outlet/>
        <BottomNavigation fixed
                          activeKey={activeKey}
                          onChange={(key) => {
                              setActiveKey(key);
                          }}
        >
            <BottomNavigation.Item key="sender" label={"sender"} linkTo={"/"}/>
            <BottomNavigation.Item key="receiver" label={"receiver"} linkTo={"/receiver"}/>
        </BottomNavigation>
    </>
}

export default Layout;
