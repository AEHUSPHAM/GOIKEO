import React from "react";
import {Modal} from "zmp-ui";

const CancelModal: React.FC<{ visible: boolean, onClose: () => void, submitAction: () => void }> = ({
                                                                                                        visible,
                                                                                                        onClose,
                                                                                                        submitAction
                                                                                                    }) => {
    return <Modal
        visible={visible}
        title="Xác nhận hủy kèo"
        onClose={() => onClose()}
        actions={[
            {
                text: "Quay về",
                close: true,
            },
            {
                text: "Hủy kèo",
                danger: true,
                onClick: submitAction
            },
        ]}
        description="Hãy để lại lời nhắn với chủ kèo"/>
}

export default CancelModal;
