import React, {useState} from "react";
import {Avatar, Box, Button} from "zmp-ui";
import useGetSetups, {Setup} from "./useGetSetups";
import useSendConfirm from "../confirm/useSendConfirm";
import ConfirmModal from "../confirm/ConfirmModal";

const SetupView: React.FC<{ data: Setup }> = ({data}) => {
    const [visible, setVis] = useState<boolean>(false);
    const sendConfirm = useSendConfirm()
    const setupsQuery = useGetSetups();
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
            <Button size={"small"} variant={"secondary"} onClick={() => setVis(true)}>Tham gia</Button>
        </Box>
        <ConfirmModal visible={visible} onClose={() => setVis(false)} submitAction={async validated => {
            await sendConfirm.mutateAsync({...validated, id: data.id})
            setVis(false)
            await setupsQuery.refetch()
        }}/>
    </>;
}

export default SetupView;
