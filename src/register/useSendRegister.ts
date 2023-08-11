import {useMutation} from "@tanstack/react-query";
import axios from "axios";

interface MatchRegister {

}

function buildFormData(o: Object) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(o)) {
        if (typeof value === "string" || value instanceof Blob) {
            formData.append(key, value);
        } else if (value) {
            formData.append(key, value.toString());
        }
    }
    return formData;
}

function sendRegisterForm(data: MatchRegister) {
    const url = `${import.meta.env.VITE_ROOT_URL}/api/register`;
    const formData = buildFormData(data);
    return axios.post<string>(url, formData, {
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    })
}

function useSendRegister() {
    return useMutation({
        mutationFn: sendRegisterForm
    })
}

export default useSendRegister;
