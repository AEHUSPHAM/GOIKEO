import React from 'react';
import {AnimationRoutes, App, SnackbarProvider, ZMPRouter} from 'zmp-ui';
import {RecoilRoot} from 'recoil';
import {Route} from "react-router-dom";
import Layout from "../Layout";
import RegisterForm from "../register/RegisterForm";


const MyApp = () => {
    return (
        <RecoilRoot>
            <App>
                <SnackbarProvider>
                    <ZMPRouter>
                        <AnimationRoutes>
                            <Route path={"/"} element={<Layout/>}>
                                <Route index element={<RegisterForm/>}/>
                                <Route path={"/receiver"} element={<div>Hello</div>}/>
                            </Route>
                        </AnimationRoutes>
                    </ZMPRouter>
                </SnackbarProvider>
            </App>
        </RecoilRoot>
    );
}
export default MyApp;
