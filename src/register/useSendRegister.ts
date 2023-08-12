import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export interface MatchRegister {
    title: string
    type: string
    location: string
    description: string
    max_participants: number
    vacancy: number

    time: {
        date: number
        month: number
        year: number
        hour: number
        minute: number
    }
}


function sendRegisterForm(data: MatchRegister) {
    const datetime = new Date(data.time.year, data.time.month,
        data.time.date, data.time.hour, data.time.minute)

    const utc = datetime.toISOString()
    const url = `${import.meta.env.VITE_ROOT_URL}/api/register`;
    return axios.post<string>(url, {
        location: data.location,
        max_participants: data.max_participants,
        start_time: utc,
        title: data.title,
        type: data.type,
        vacancy: data.vacancy
    }, {
        headers: {"Content-Type": "application/json"}
    })
}

function useSendRegister() {
    return useMutation<unknown, unknown, MatchRegister, unknown>({
        mutationFn: sendRegisterForm
    })
}

export default useSendRegister;
