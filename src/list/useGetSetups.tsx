import {useQuery} from "@tanstack/react-query";

export interface Setup {
    name: string
    location: string
    time: string
    avatar: string | undefined
}

async function fetchSetup() {
    return Promise.resolve([{
        name : "hi",
        location : "quan 3",
        time : "10h30p"
    }]);
    // return await axios.get<Setup[]>("").then(value => value.data)
}

function useGetSetups() {
    return useQuery<Setup[], unknown>(
        ["fetch-setups"],
        () => fetchSetup(),
        {
            staleTime: Infinity,
        }
    );
}

export default useGetSetups;
