import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export interface MatchRegister {
    title: string
    type: string
    location: string
    description: string
    max_participants: number
    vacancy: number
}

export function buildFormData(o: Object) {
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
    return axios.post<string>(url, data, {
        headers: {"Content-Type": "application/json"}
    })
}

function useSendRegister() {
    return useMutation<unknown, unknown, MatchRegister, unknown>({
        mutationFn: sendRegisterForm
    })
}

export default useSendRegister;
