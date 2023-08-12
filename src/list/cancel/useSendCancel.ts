import {useMutation} from "@tanstack/react-query";
import axios from "axios";

function postCancel(id: string) {
    // TODO
    return axios.post<{}>("").then(value => value.data)
}

function useSendCancel() {
    return useMutation<unknown, unknown, string, unknown>({
        mutationFn: postCancel
    })
}

export default useSendCancel;

