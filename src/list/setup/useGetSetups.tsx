import {useQuery} from "@tanstack/react-query";

export interface Setup {
    id: string;
    name: string
    location: string
    time: string
    slot: number
    vacancy: number
    avatar: string | undefined
}

const DATA: Setup[] = [{
    id: "1",
    name: "hi",
    location: "quan 3",
    time: "10h30p",
    avatar: undefined,
    slot: 10,
    vacancy: 3
}, {
    id: "2",
    name: "hi",
    location: "quan 3",
    time: "10h30p",
    avatar: undefined,
    slot: 14,
    vacancy: 1
}, {
    id: "3",
    name: "hi",
    location: "quan 3",
    time: "10h30p",
    avatar: undefined,
    slot: 10,
    vacancy: 3
}, {
    id: "4",
    name: "hi",
    location: "quan 3",
    time: "10h30p",
    avatar: undefined,
    slot: 20,
    vacancy: 3
}];

async function fetchSetup() {
    return Promise.resolve(DATA);
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
