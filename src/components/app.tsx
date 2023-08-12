import React, {PropsWithChildren, useEffect, useState} from 'react';
import {AnimationRoutes, App, BottomNavigation, Icon, SnackbarProvider, useNavigate, ZMPRouter} from 'zmp-ui';
import {RecoilRoot} from 'recoil';
import {Route} from "react-router-dom";
import Layout from "../Layout";
import RegisterForm from "../register/RegisterForm";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ListView from "../list/setup/ListView";
import JoinedListView from "../list/setup/JoinedListView";
import ProtectedRoute from "../ProtectedRoute";
import {setNavigationBarTitle} from "zmp-sdk";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});
const Wrapper: React.FC<PropsWithChildren> = ({children}) => {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState<string>("sender");
    useEffect(() => {
        if (activeKey === "joined") navigate("/joined");
        else if (activeKey === "receiver") navigate("/receiver");
        else navigate("/root");
    }, [activeKey]);
    return <>
        {/*<div style={{marginBottom: "5rem"}}>*/}
        <AnimationRoutes>
            <Route path={"/"}
                   element={<ProtectedRoute><Layout activeKey={activeKey}
                                                    setActiveKey={setActiveKey}/></ProtectedRoute>}>
                <Route path={"/root"} element={<RegisterForm/>}/>
                <Route path={"/receiver"} element={<ListView/>}/>
                <Route path={"/joined"} element={<JoinedListView/>}/>
            </Route>
        </AnimationRoutes>
        {/*</div>*/}
        <BottomNavigation fixed
                          defaultActiveKey={"sender"}
                          activeKey={activeKey}
        >
            <BottomNavigation.Item key="sender" label={"Tạo Kèo"}
                                   icon={<Icon icon="zi-plus-circle"/>}
                                   activeIcon={<Icon icon="zi-plus-circle-solid"/>}
                                   onClick={e => {
                                       setActiveKey("sender")
                                   }}
            />
            <BottomNavigation.Item key="receiver" label={"Tìm Kèo"}
                                   onClick={e => {
                                       setActiveKey("receiver")
                                   }}
                                   icon={<Icon icon="zi-user-search"/>}
                                   activeIcon={<Icon icon="zi-user-search-solid"/>}/>
            <BottomNavigation.Item key="joined" label={"Kèo Của Tôi"}
                                   onClick={e => {
                                       setActiveKey("joined")
                                   }}
                                   icon={<Icon icon="zi-user"/>}
                                   activeIcon={<Icon icon="zi-user-solid"/>}/>
        </BottomNavigation>
    </>
}

const MyApp = () => {
    useEffect(() => {
        setNavigationBarTitle({title: "Gọi Kèo"});
    }, [])
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <App>
                    <SnackbarProvider>
                        <ZMPRouter>
                            <Wrapper/>
                        </ZMPRouter>
                    </SnackbarProvider>
                </App>
            </QueryClientProvider>
        </RecoilRoot>
    );
}
export default MyApp;
