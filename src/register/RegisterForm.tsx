import React, {useState} from "react";
import {Box, Button, DatePicker, Input, Page, Select} from "zmp-ui";

import {Controller, useForm} from "react-hook-form";
import useSendRegister, {MatchRegister} from "./useSendRegister";
import {LocalizationProvider, MobileTimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/vi';


const {OtpGroup, Option} = Select;


const RegisterForm: React.FC = () => {
    const [datetime, setDatetime] = useState<Date>(undefined);
    const form = useForm<MatchRegister>({
        mode: "onChange"
    })
    const mutation = useSendRegister();
    return <Page className={"section-container"} style={{height: "80%", overflowY: "scroll"}}
    >
        <div style={{textAlign: "center"}}>
            <h1>Hi</h1>
        </div>
        <div style={{maxWidth: "30rem", justifyContent: "center", marginInline: "auto"}}>
            <Box>
                <Controller
                    control={form.control}
                    name="title"
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
                            status={form.formState.errors.title !== undefined ? "error" : "success"}
                            errorText={form.formState.errors.title?.message}
                            clearable/>
                    )}
                />
            </Box>
            <Box>
                <Controller
                    control={form.control}
                    name="type"
                    rules={{
                        required: "Điền vào field này nhé",
                    }}
                    render={({
                                 field: {onChange, onBlur, value},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                             }) => (
                        <Select
                            value={value}
                            label="Loại bộ môn"
                            helperText="Nhập bộ môn bạn muốn chơi nhé"
                            errorText={form.formState.errors.type?.message}
                            status={form.formState.errors.title !== undefined ? "error" : "success"}
                            onChange={selected => {
                                onChange(selected);
                            }}
                        >
                            <Option value="swim" title="Bơi"/>
                            <Option value="basketball" title="Bóng rổ"/>
                            <Option value="soccer" title="Bóng đá"/>
                            <Option value="badminton" title="Cầu lông"/>
                            <Option value="khác" title="Khác"/>
                        </Select>
                    )}
                />
            </Box>
            <Box mt={6}>
                <Controller
                    control={form.control}
                    name="type"
                    rules={{
                        required: "Điền vào field này nhé",
                    }}
                    render={({
                                 field: {onChange, onBlur, value},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                             }) => (
                        <>
                            <div>Nhập thời gian</div>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale="vi"
                            >
                                <MobileTimePicker onChange={value => {
                                    setDatetime(prevState => {
                                        let newDate = {
                                            ...prevState,
                                        };
                                        newDate.setHours(value["$H"])
                                        newDate.setMinutes(value["$m"])
                                        return newDate
                                    })
                                }}/>
                            </LocalizationProvider>
                            <DatePicker dateTimePicker={true}
                                        helperText={"Nhập thời gian"}
                                        errorText={form.formState.errors.type?.message}
                                        onChange={value1 => {

                                        }}
                                        status={form.formState.errors.title !== undefined ? "error" : "success"}/>
                        </>
                    )}
                />
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
                    name="max_participants"
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
                               status={form.formState.errors.max_participants !== undefined ? "error" : "success"}
                               errorText={form.formState.errors.max_participants?.message}
                               onChange={(e) => form.setValue("max_participants", e.target.value)}
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
                            console.log(form.formState.errors.title?.message)
                            mutation.mutate(validated);
                        })}
                >Gửi</Button>
            </Box>
        </div>
    </Page>
}

export default RegisterForm;
