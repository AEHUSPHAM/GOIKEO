import React, {useState} from "react";
import {Avatar, Box, Button, Spinner} from "zmp-ui";
import {Setup} from "./useGetSetups";
import useSendConfirmJoin from "../confirm/useSendConfirmJoin";
import ConfirmModal from "../confirm/ConfirmModal";
import {UserContext} from "../../ProtectedRoute";

const SetupView: React.FC<{ data: Setup }> = ({data}) => {
    const [visible, setVis] = useState<boolean>(false);
    const sendConfirm = useSendConfirmJoin()
    const userDetails = React.useContext(UserContext);

    if (!data) {
        return <Spinner/>
    }

    console.log(data.subcriptions)
    console.log(userDetails)

    const isMine = data.subcriptions.find(value => value.user_id === userDetails?.id) !== undefined
    return <>
        <Box flex style={{
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Avatar src={JSON.parse(data.owner.picture).data.url}/>
            <div style={{
                textAlign: "center",
            }}>
                <div><strong>{data.title}</strong></div>
                <div className={"d-flex justify-content-around"}>
                    <div>{data.location}</div>
                    <span>-</span>
                    <div>{data.time}</div>
                </div>
            </div>
            {isMine ? "Host" :
                <Button size={"small"} variant={"secondary"} onClick={() => setVis(true)}>Tham gia</Button>}
        </Box>
        <ConfirmModal visible={visible} onClose={() => setVis(false)} submitAction={async validated => {
            await sendConfirm.mutateAsync({...validated, item_id: data.id})
            setVis(false)
        }}/>
    </>;
}

export default SetupView;
