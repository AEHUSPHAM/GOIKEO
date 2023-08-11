import React from "react";
import {Avatar, Box, Button} from "zmp-ui";
import {Setup} from "./useGetSetups";

const SetupView: React.FC<{ data: Setup }> = ({data}) => {
    return <>
        <Box flex style={{
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Avatar/>
            <div style={{
                textAlign: "center",
            }}>
                <div><strong>{data.name}</strong></div>
                <div className={"d-flex justify-content-around"}>
                    <div>{data.location}</div>
                    <span>-</span>
                    <div>{data.time}</div>
                </div>
            </div>
            <Button size={"small"} variant={"secondary"}>Tham gia</Button>
        </Box>
    </>;
}

export default SetupView;
