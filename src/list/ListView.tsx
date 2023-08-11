import React from "react";
import useGetSetups from "./useGetSetups";
import SetupView from "./SetupView";
import {List, Page} from "zmp-ui";
import {Container} from "react-bootstrap";
import FilterComponent from "./FilterComponent";

const ListView: React.FC = () => {
    const {data, isLoading, isFetching, isError} = useGetSetups();
    const mapped = data == undefined ? [] : data
    const view = mapped.map(el => {
        return <List.Item style={{maxWidth: "30rem", marginInline: "auto"}}><SetupView data={el}/></List.Item>
    })
    return <Page>
        <Container>
            <section id={"list-header"} className={"section-container"}>
                <FilterComponent/>
            </section>
            <section id={"list-body"} className={"section-container"}>
                <div className={"h3"}>Danh sách kèo thơm</div>
                <List style={{justifyContent: "center", alignItems: "center"}}>{view}</List>
            </section>
        </Container>
    </Page>
}
export default ListView
