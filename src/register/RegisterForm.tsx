import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import {Box, Button, DatePicker, Input} from "zmp-ui";
import {useForm} from "react-hook-form";
import {MatchRegister} from "./useSendRegister";
import {deDE, LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const RegisterForm: React.FC = () => {
    const form = useForm<MatchRegister>()
    useEffect(() => {

    })
    return <Container>
        <div style={{textAlign: "center"}}>
            <h1>Hi</h1>
        </div>
        <div style={{maxWidth: "30rem", justifyContent: "center", marginInline: "auto"}}>
            {/*<FormControl {...form.register("name")}/>*/}
            <Box>
                <Input placeholder={"hello"}
                       onChange={(e) => form.setValue("name", e.target.value)} label={"Tên kèo"}
                       helperText={"Tên kèo nhé bạn"} clearable/>
            </Box>
            <Box mt={6}>
                <DatePicker
                    label="Ngày giờ"
                    helperText="Ngày giờ gặp nhau nhé"
                    mask
                    maskClosable
                    dateFormat="dd/mm/yyyy"
                    title="DatePicker"
                />
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={deDE.components.MuiLocalizationProvider.defaultProps.localeText}
                >
                    <TimePicker/>
                </LocalizationProvider>;
            </Box>
            <Button onClick={event => {
                let values = form.getValues();
                console.log(values)
            }}>click</Button>
        </div>
    </Container>
}

export default RegisterForm;
