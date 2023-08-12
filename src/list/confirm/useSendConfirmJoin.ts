import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {RequestJoinForm} from "./ConfirmModal";

function postConfirm(data: RequestJoinForm) {
    // TODO
    return axios.post<{}>(`${import.meta.env.VITE_ROOT_URL}/api/join`, data, {
        headers: {"Content-Type": "application/json"}
    }).then(value => value.data)
}

function useSendConfirmJoin() {
    return useMutation<unknown, unknown, RequestJoinForm, unknown>({
        mutationFn: postConfirm
    })
}

export default useSendConfirmJoin;
