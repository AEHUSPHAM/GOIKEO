import {useQuery} from "@tanstack/react-query";
import axios from "axios";


export interface Owner {
    id: string,
    name: string,
    picture: string
}

export interface MySetUp {
    id: string
    owner: Owner
    title: string
    location: string
    time: string
    max_participants: number
    is_active: boolean
}

async function fetchSetup() {
    // return Promise.resolve(DATA);
    return await axios.get<MySetUp[]>(`${import.meta.env.VITE_ROOT_URL}/items/me`).then(value => value.data)
}

function useMyGetSetups() {
    return useQuery<MySetUp[], unknown>(
        ["fetch-setups"],
        () => fetchSetup(),
        {
            staleTime: 2000,
            refetchInterval: 1000
        }
    );
}

export default useMyGetSetups;
