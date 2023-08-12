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
            // login.mutate(value)
            login.mutate("Ofk-1EOdoY9WcRW8uY789cYRkGphE8zBRjg65xW_i3rcthbnlGoa5bh9jqou2uynFCkkHUi-Zsy3_uSld2YQNdpjYHA91QPPVSIiB80Mj6i5eeSXu4EiPWszfm7JOfnmAvlcEjrNrt0mbiOMsadfKJwGnm_8HVqa4hlnRkr0m3ipuCfUi5da4J6xz4_CMiOpBRNiNCTkbWq3YvKYmadlTY3m_mJdDlDo3OttNjbtyYmami5xqW6m8pF3jMkt0BWNIRovHSfmiGz0gRLPosMzS32ThrthJuaNAOYEEBADGX_aECuh")
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
