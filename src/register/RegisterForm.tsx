import React from "react";
import {Box, Button, DatePicker, Input, Page} from "zmp-ui";
import {Controller, useForm} from "react-hook-form";
import useSendRegister, {MatchRegister} from "./useSendRegister";
import {LocalizationProvider, MobileTimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/vi';


const RegisterForm: React.FC = () => {
    const form = useForm<MatchRegister>({
        mode: "onChange"
    })
    const mutation = useSendRegister();
    return <Page className={"section-container"}
    >
        <div style={{textAlign: "center"}}>
            <h1>Hi</h1>
        </div>
        <div style={{maxWidth: "30rem", justifyContent: "center", marginInline: "auto"}}>
            <Box>
                <Controller
                    control={form.control}
                    name="name"
                    rules={{
                        required: "Điền vào field này nhé",
                    }}
                    render={({
                                 field: {onChange, onBlur, value},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                             }) => (
                        <Input
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            label={"Tên kèo"}
                            helperText={"Tên kèo nhé bạn"}
                            status={form.formState.errors.name !== undefined ? "error" : "success"}
                            errorText={form.formState.errors.name?.message}
                            clearable/>
                    )}
                />
            </Box>
            <Box mt={6}>
                <DatePicker/>
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
                <Controller
                    control={form.control}
                    name="location"
                    rules={{
                        required: "Điền vào field này nhé",
                    }}
                    render={({
                                 field: {onChange, onBlur, value},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                             }) => (
                        <Input helperText={"Địa điểm gặp nhau"}
                               label={"Địa điểm"}
                               status={form.formState.errors.location !== undefined ? "error" : "success"}
                               errorText={form.formState.errors.location?.message}
                               onChange={(e) => form.setValue("location", e.target.value)}
                        />
                    )}
                />
            </Box>
            <Box mt={6}>
                <Controller
                    control={form.control}
                    name="slot"
                    rules={{
                        required: "Điền vào field này nhé",
                    }}
                    render={({
                                 field: {onChange, onBlur, value},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                             }) => (
                        <Input type={"number"}
                               max={30}
                               min={1}
                               label={"Số người"}
                               helperText={"Số người đang có"}
                               status={form.formState.errors.slot !== undefined ? "error" : "success"}
                               errorText={form.formState.errors.slot?.message}
                               onChange={(e) => form.setValue("slot", e.target.value)}
                        />
                    )}
                />
            </Box>
            <Box mt={6}>
                <Controller
                    control={form.control}
                    name="vacancy"
                    rules={{
                        required: "Điền vào field này nhé",
                    }}
                    render={({
                                 field: {onChange, onBlur, value},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                             }) => (
                        <Input type={"number"}
                               max={30}
                               min={0}
                               label={"Còn thiếu"}
                               helperText={"Số người còn thiếu"}
                               status={form.formState.errors.vacancy !== undefined ? "error" : "success"}
                               errorText={form.formState.errors.vacancy?.message}
                               onChange={(e) => form.setValue("vacancy", e.target.value)}
                        />
                    )}
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
                            console.log(form.formState.errors.name?.message)
                            mutation.mutate(validated);
                        })}
                >Gửi</Button>
            </Box>
        </div>
    </Page>
}

export default RegisterForm;
