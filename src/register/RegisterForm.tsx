import React from "react";
import {Box, Button, Input, Page} from "zmp-ui";
import {useForm} from "react-hook-form";
import useSendRegister, {MatchRegister} from "./useSendRegister";
import {LocalizationProvider, MobileTimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/vi';

const submit = async (data: MatchRegister) => {
    try {
        await postUpdateWelcomeMessage(data);
        alert("success");
    } finally {
    }
};

const RegisterForm: React.FC = () => {
    const form = useForm<MatchRegister>()
    const mutation = useSendRegister();
    return <Page className={"section-container"}
    >
        <div style={{textAlign: "center"}}>
            <h1>Hi</h1>
        </div>
        <div style={{maxWidth: "30rem", justifyContent: "center", marginInline: "auto"}}>
            <Box>
                <Input
                    onChange={(e) => form.setValue("name", e.target.value)}
                    label={"Tên kèo"}
                    helperText={"Tên kèo nhé bạn"} clearable/>
            </Box>
            <Box mt={6}>
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="vi"
                >
                    <MobileTimePicker onChange={value => {
                        console.log(value["$H"]);
                        console.log(value["$m"]);
                    }}/>
                </LocalizationProvider>
            </Box>
            <Box mt={6}>
                <Input helperText={"Địa điểm gặp nhau"}
                       label={"Địa điểm"}
                       onChange={(e) => form.setValue("location", e.target.value)}
                />
            </Box>
            <Box mt={6}>
                <Input type={"number"}
                       label={"Số người"}
                       helperText={"Số người đang có"}
                       onChange={(e) => form.setValue("slot", e.target.value)}
                />
            </Box>
            <Box mt={6}>
                <Input type={"number"}
                       label={"Còn thiếu"}
                       helperText={"Số người còn thiếu"}
                       onChange={(e) => form.setValue("vacancy", e.target.value)}
                />
            </Box>
            <Box mt={6}>
                <Input type={"text"}
                       label={"Chú thích"}
                       onChange={(e) => form.setValue("note", e.target.value)}
                />
            </Box>
            <Box mt={6}>
                <Button style={{marginInline: "auto"}}
                        onClick={form.handleSubmit((validated) => {
                            mutation.mutate(validated);
                        })}
                >Gửi</Button>
            </Box>
        </div>
    </Page>
}

export default RegisterForm;
