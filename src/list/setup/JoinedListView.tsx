import React from "react";
import {List, Page} from "zmp-ui";
import {Container} from "react-bootstrap";
import JoinedSetupView from "./JoinedSetupView";
import useGetSetups from "./useGetSetups";

const JoinedListView: React.FC = () => {
    const {data, isLoading, isFetching, isError} = useGetSetups();
    const mapped = data == undefined ? [] : data
    const view = mapped.map(el => {
        return <List.Item style={{maxWidth: "30rem", marginInline: "auto"}}><JoinedSetupView data={el}/></List.Item>
    })
    return <Page>
        <Container>
            <section id={"list-body"} className={"section-container"}>
                <div className={"h3"}>Kèo đã tham gia</div>
                <List style={{justifyContent: "center", alignItems: "center"}}>{view}</List>
            </section>
        </Container>
    </Page>
}
export default JoinedListView;
