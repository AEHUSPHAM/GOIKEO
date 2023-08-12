import React, {PropsWithChildren, useEffect, useState} from 'react';
import {AnimationRoutes, App, SnackbarProvider, useNavigate, ZMPRouter} from 'zmp-ui';
import {RecoilRoot} from 'recoil';
import {Route} from "react-router-dom";
import Layout from "../Layout";
import RegisterForm from "../register/RegisterForm";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ListView from "../list/setup/ListView";
import JoinedListView from "../list/setup/JoinedListView";
import ProtectedRoute from "../ProtectedRoute";

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
    return <AnimationRoutes>
        <Route path={"/"}
               element={<ProtectedRoute><Layout activeKey={activeKey} setActiveKey={setActiveKey}/></ProtectedRoute>}>
            <Route path={"root"} element={<RegisterForm/>}/>
            <Route path={"receiver"} element={<ListView/>}/>
            <Route path={"joined"} element={<JoinedListView/>}/>
        </Route>
    </AnimationRoutes>
}

const MyApp = () => {
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
