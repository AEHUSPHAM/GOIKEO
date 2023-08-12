import React, {useState} from "react";
import {Avatar, Box, Button} from "zmp-ui";
import CancelModal from "../cancel/CancelModal";
import {Setup} from "./useGetSetups";
import useSendCancel from "../cancel/useSendCancel";

const JoinedSetupView: React.FC<{ data: Setup }> = ({data}) => {
    const [visible, setVis] = useState<boolean>(false);
    const sendCancel = useSendCancel()
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
            <div>
                <div style={{textAlign: "center"}}>
                    <span>{data.slot - data.vacancy}</span>
                    <span>/</span>
                    <span>{data.slot}</span>
                </div>
                <Button size={"small"} variant={"secondary"} onClick={event => {
                    setVis(true);
                }}>Hủy kèo</Button>
            </div>
        </Box>
        <CancelModal visible={visible} onClose={() => setVis(false)} submitAction={async () => {
            await sendCancel.mutateAsync(data.id)
            setVis(false)
        }}/>
    </>;
}

export default JoinedSetupView;
