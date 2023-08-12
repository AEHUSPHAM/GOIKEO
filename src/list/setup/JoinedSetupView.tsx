import React, {useState} from "react";
import {Avatar, Box, Button} from "zmp-ui";
import CancelModal from "../cancel/CancelModal";
import useSendCancel from "../cancel/useSendCancel";
import {showToast} from "zmp-sdk";
import {MySetUp} from "./useGetMySetups";

const JoinedSetupView: React.FC<{ data: MySetUp }> = ({data}) => {
    const [visible, setVis] = useState<boolean>(false);
    const sendCancel = useSendCancel()
    return <>
        <Box flex style={{
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div style={{width: "5rem"}}>
                <Avatar src={JSON.parse(data.owner.picture).data.url}/>
            </div>
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
            <div>
                <div style={{textAlign: "center"}}>
                    <span>{data.max_participants - 0}</span>
                    <span>/</span>
                    <span>{data.max_participants}</span>
                </div>
                {data.is_active ? <Button type={"danger"} size={"small"} variant={"secondary"} onClick={event => {
                    setVis(true);
                }}>Hủy kèo</Button> : <span>Đã hủy</span>}
            </div>
        </Box>
        <CancelModal visible={visible} onClose={() => setVis(false)} submitAction={async () => {
            try {
                await sendCancel.mutateAsync(data.id)
                showToast({message: "thành công"})
            } catch (ex) {
                showToast({message: "thất bại"})
            } finally {
                setVis(false)
            }
        }}/>
    </>;
}

export default JoinedSetupView;
