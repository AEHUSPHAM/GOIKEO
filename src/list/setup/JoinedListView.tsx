import React from "react";
import {List, Page} from "zmp-ui";
import {Container} from "react-bootstrap";
import JoinedSetupView from "./JoinedSetupView";
import useMyGetSetups from "./useGetMySetups";

const JoinedListView: React.FC = () => {
    const {data, isLoading, isFetching, isError} = useMyGetSetups();
    const mapped = data == undefined ? [] : data
    const view = mapped.map(el => {
        return <List.Item key={el.id} style={{maxWidth: "30rem", marginInline: "auto"}}><JoinedSetupView
            data={el}/></List.Item>
    })
    return <Page>
        <Container>
            <section id={"list-body"} className={"section-container"}>
                <div className={"h3"}>Kèo đã tạo</div>
                <List style={{justifyContent: "center", alignItems: "center"}}>{view}</List>
            </section>
        </Container>
    </Page>
}
export default JoinedListView;
