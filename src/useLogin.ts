import axios from "axios";
import {useMutation} from "@tanstack/react-query";


export interface UserProfile {
    id: string,
    name: string
}

const useLogin = () => {
    return useMutation<UserProfile, unknown, string>({
        mutationKey: ["login"],
        mutationFn: async token => {
            let url = new URL(`${import.meta.env.VITE_ROOT_URL}/users/me`);
            const data = await axios.get<{}, UserProfile>(url.toString(), {
                headers: {
                    'token': token
                }
            });
            axios.defaults.headers.common["token"] = token
            return data
        }
    })
}

export default useLogin;
