import React from "react";
import {Box, Button, DatePicker, Input, Page, Select} from "zmp-ui";

import {Controller, useForm} from "react-hook-form";
import useSendRegister, {MatchRegister} from "./useSendRegister";
import {LocalizationProvider, MobileTimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/vi';
import {showToast} from "zmp-sdk";


const {Option} = Select;

function getDefaultTime() {
    const now = new Date();
    let formattedNow = {
        date: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),

        hour: now.getHours(),
        minute: now.getMinutes(),
    };
    return formattedNow
}

const RegisterForm: React.FC = () => {
    const form = useForm<MatchRegister>({
        mode: "onChange"
    })
    const mutation = useSendRegister();

    return <Page className={"section-container-full"} style={{overflowY: "scroll"}}
    >
        <div style={{textAlign: "center"}}>
            <h1>Tạo Kèo</h1>
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
                            <Option value="other" title="Khác"/>
                        </Select>
                    )}
                />
            </Box>
            <Box mt={6}>
                <Controller
                    control={form.control}
                    name="time"
                    rules={{
                        required: "Điền vào field này nhé",
                    }}
                    defaultValue={getDefaultTime()}
                    render={({
                                 field: {onChange, onBlur, value},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                             }) => (
                        <>
                            <span style={{fontSize : "14px"}}>Nhập thời gian</span>
                            <div className={"d-flex justify-content-around"}>
                                <DatePicker helperText={"Nhập thời gian"}
                                            errorText={form.formState.errors.type?.message}
                                            defaultValue={new Date()}
                                            onChange={change => {
                                                form.setValue("time.date", change.getDate())
                                                form.setValue("time.month", change.getMonth())
                                                form.setValue("time.year", change.getUTCFullYear())
                                            }}
                                            status={form.formState.errors.time !== undefined ? "error" : "success"}/>
                                <div style={{marginLeft: "1rem"}}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                        adapterLocale="vi"
                                    >
                                        <MobileTimePicker onChange={value => {
                                            form.setValue("time.hour", value["$H"])
                                            form.setValue("time.minute", value["$H"])
                                        }}/>
                                    </LocalizationProvider>
                                </div>
                            </div>
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
            <Box mt={6} flex>
                <Button style={{marginInline: "auto"}}
                        onClick={form.handleSubmit(async (validated) => {
                            await mutation.mutateAsync(validated);
                            showToast({message: "success"})
                        })}
                >Gửi</Button>
            </Box>
        </div>
    </Page>
}

export default RegisterForm;
