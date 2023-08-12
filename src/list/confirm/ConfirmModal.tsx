import React from "react";
import {Input, Modal} from "zmp-ui";
import {Controller, useForm} from "react-hook-form";
import useSendConfirm from "./useSendConfirmJoin";

export interface RequestJoinForm {
    item_id : string
    message: string
}

const ConfirmModal: React.FC<{
    visible: boolean,
    onClose: () => void,
    submitAction: (validated: RequestJoinForm) => void
}> = ({
          visible,
          onClose,
          submitAction
      }) => {
    const form = useForm<RequestJoinForm>({
        mode: "all"
    });
    return <Modal
        visible={visible}
        title="Gửi yêu cầu tham gia kèo"
        onClose={() => onClose()}
        actions={[
            {
                text: "Hủy",
                close: true,
            },
            {
                text: "Gửi",
                highLight: true,
                onClick: form.handleSubmit((validated) => {
                    submitAction(validated)
                })
            },
        ]}
        description="Hãy để lại lời nhắn với chủ kèo">
        <>
            <Controller
                control={form.control}
                name="message"
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
                        status={form.formState.errors.message !== undefined ? "error" : "success"}
                        errorText={form.formState.errors.message?.message}
                        clearable/>
                )}
            />
        </>
    </Modal>
}

export default ConfirmModal;
