import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {RequestJoinForm} from "./ConfirmModal";
import {buildFormData} from "../../register/useSendRegister";

function postConfirm(data: RequestJoinForm) {
    const confirmation = buildFormData(data)
    const id = data.id
    // TODO
    return axios.post<{}>("", confirmation, {
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }).then(value => value.data)
}

function useSendConfirm() {
    return useMutation<unknown, unknown, RequestJoinForm, unknown>({
        mutationFn: postConfirm
    })
}

export default useSendConfirm;
