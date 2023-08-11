import React from 'react';
import {AnimationRoutes, App, SnackbarProvider, ZMPRouter} from 'zmp-ui';
import {RecoilRoot} from 'recoil';
import {Route} from "react-router-dom";
import Layout from "../Layout";
import RegisterForm from "../register/RegisterForm";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ListView from "../list/ListView";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});
const MyApp = () => {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <App>
                    <SnackbarProvider>
                        <ZMPRouter>
                            <AnimationRoutes>
                                <Route path={"/"} element={<Layout/>}>
                                    <Route index element={<RegisterForm/>}/>
                                    <Route path={"/receiver"} element={<ListView/>}/>
                                </Route>
                            </AnimationRoutes>
                        </ZMPRouter>
                    </SnackbarProvider>
                </App>
            </QueryClientProvider>
        </RecoilRoot>
    );
}
export default MyApp;
