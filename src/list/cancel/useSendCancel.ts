import {useMutation} from "@tanstack/react-query";
import axios from "axios";

function postCancel(id: string) {
    return axios.post<{}>(`${import.meta.env.VITE_ROOT_URL}/api/cancel?item_id=${id}`).then(value => value.data)
}

function useSendCancel() {
    return useMutation<unknown, unknown, string, unknown>({
        mutationFn: postCancel
    })
}

export default useSendCancel;

