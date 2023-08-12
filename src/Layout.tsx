import React from "react";
import {Outlet} from "react-router-dom";
import {BottomNavigation, Icon} from "zmp-ui";

const Layout: React.FC<{ activeKey: string, setActiveKey: (key: string) => void }> = ({activeKey, setActiveKey}) => {
    return <div style={{marginBottom : "3rem"}}>
        <Outlet/>
    </div>
}

export default Layout;
