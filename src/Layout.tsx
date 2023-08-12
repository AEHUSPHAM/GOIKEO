import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {BottomNavigation, Icon} from "zmp-ui";

const Layout: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string>("sender");
    console.log(activeKey);
    return <>
        <Outlet/>
        <BottomNavigation fixed
                          activeKey={activeKey}
                          onChange={(key) => {
                              setActiveKey(key);
                          }}
        >
            <BottomNavigation.Item key="sender" label={"sender"} linkTo={"/"}
                                   icon={<Icon icon="zi-chat"/>}
                                   activeIcon={<Icon icon="zi-chat-solid"/>}/>
            <BottomNavigation.Item key="receiver" label={"receiver"} linkTo={"/receiver"}
                                   icon={<Icon icon="zi-chat"/>}
                                   activeIcon={<Icon icon="zi-chat-solid"/>}/>
            <BottomNavigation.Item key="joined" label={"joined"} linkTo={"/joined"}
                                   icon={<Icon icon="zi-chat"/>}
                                   activeIcon={<Icon icon="zi-chat-solid"/>}/>
        </BottomNavigation>
    </>
}

export default Layout;
