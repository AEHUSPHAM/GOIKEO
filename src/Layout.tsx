import React from "react";
import {Outlet} from "react-router-dom";
import {BottomNavigation, Icon} from "zmp-ui";

const Layout: React.FC<{ activeKey: string, setActiveKey: (key: string) => void }> = ({activeKey, setActiveKey}) => {
    return <>
        <Outlet/>
        <BottomNavigation fixed
                          defaultActiveKey={"sender"}
                          activeKey={activeKey}
        >
            <BottomNavigation.Item key="sender" label={"sender"}
                                   icon={<Icon icon="zi-chat"/>}
                                   activeIcon={<Icon icon="zi-chat-solid"/>}
                                   onClick={e => {
                                       setActiveKey("sender")
                                   }}
            />
            <BottomNavigation.Item key="receiver" label={"receiver"}
                                   onClick={e => {
                                       setActiveKey("receiver")
                                   }}
                                   icon={<Icon icon="zi-chat"/>}
                                   activeIcon={<Icon icon="zi-chat-solid"/>}/>
            <BottomNavigation.Item key="joined" label={"joined"}
                                   onClick={e => {
                                       setActiveKey("joined")
                                   }}
                                   icon={<Icon icon="zi-chat"/>}
                                   activeIcon={<Icon icon="zi-chat-solid"/>}/>
        </BottomNavigation>
    </>
}

export default Layout;
