import useLogin, {UserProfile} from "./useLogin";
import React, {PropsWithChildren, useEffect, useState} from "react";
import {getAccessToken} from "zmp-sdk";
import {Spinner} from "zmp-ui";


export const UserContext = React.createContext<UserProfile | undefined>(undefined);


const ProtectedRoute: React.FC<PropsWithChildren> = ({children}) => {
    const login = useLogin()
    const [userProfile, setUserProfile] = useState<UserProfile>(undefined)
    useEffect(() => {
        getAccessToken().then(value => {
            login.mutate(value)
            // login.mutate("JC6s0Dp7nNfEmx0CsC77VaR1iGZHsAuK9e7IEiFWfpKA-eWJzFM96nQ1dY3bwR4g4uscC-R3Z29jkOnIXy3nIHV7xc_bfPb34AAKPVp4laLkmxerdvE987JUYIsPlVuUKElKPSw8fsu5wAbRxlA4B2sCY1owqPGTQxIQ4hlIw3DRbi4LfUwsD66jkK-Mu99ySwsaNkQYbqSHrw9tnxFUTnR9tWt-bzyYDkd_6U6ctMCzo-53z8hpOHkBsbRqwwuiPBVQL-_tqMC2aVjAmUtFRmgvibZv_Brf38JBS7ccDqL3tjZ1Sm")
        })
    }, []);
    useEffect(() => {
        if (login.data) setUserProfile(login.data)
    }, [login.data]);
    if (!login.data) return <div style={{marginInline: "auto", justifyItems: "center"}}><Spinner/></div>
    return <UserContext.Provider value={userProfile}>
        {children}
    </UserContext.Provider>
}
export default ProtectedRoute
