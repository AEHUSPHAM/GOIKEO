import {useQuery} from "@tanstack/react-query";
import axios from "axios";


export interface Owner {
    id: string,
    name: string,
    picture: string
}

export interface Subscription {
    user_id: string
    status: string
}

export interface Setup {
    id: string
    owner: Owner
    title: string
    location: string
    created_time: string
    max_participants: number
    subcriptions: Subscription[]
}

async function fetchSetup(filter: string | undefined) {
    // return Promise.resolve(DATA);
    return await axios.get<Setup[]>(`${import.meta.env.VITE_ROOT_URL}/items`).then(value => value.data)
}

function useGetSetups(filter: string | undefined) {
    return useQuery<Setup[], unknown>(
        ["fetch-setups", filter],
        () => fetchSetup(filter),
        {
            staleTime: 2000,
            refetchInterval: 1000
        }
    );
}

export default useGetSetups;
