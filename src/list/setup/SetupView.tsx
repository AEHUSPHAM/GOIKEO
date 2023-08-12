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

    const hasJoined = data.subcriptions.find(value => value.user_id === userDetails?.id) !== undefined
    const isMine = data.owner.id === userDetails?.id
    return <>
        <Box flex style={{
            alignItems: "center"
        }}>
            <div style={{width: "5rem"}}>
                <Avatar src={JSON.parse(data.owner.picture).data.url}/>
            </div>
            <div style={{textAnchor: "start", marginLeft: "3rem"}}>
                <div>Tên <strong>{data.title}</strong></div>
                <div>Địa điểm <strong>{data.location}</strong></div>
                <div>Thời điểm <strong>{data.created_time}</strong></div>
            </div>
            <div style={{marginLeft: "auto"}}>
                {isMine ? <span>Host</span> :
                    (hasJoined ? <span>Đã tham gia</span> :
                        <Button size={"small"} variant={"secondary"} onClick={() => setVis(true)}>Tham gia</Button>)}
            </div>
        </Box>
        <ConfirmModal visible={visible} onClose={() => setVis(false)}
                      submitAction={async validated => {
                          await sendConfirm.mutateAsync({...validated, item_id: data.id})
                          setVis(false)
                      }}/>
    </>;
}

export default SetupView;
