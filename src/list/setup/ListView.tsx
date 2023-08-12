import React, {useState} from "react";
import SetupView from "./SetupView";
import {List, Page} from "zmp-ui";
import {Container} from "react-bootstrap";
import FilterComponent from "../FilterComponent";
import useGetSetups from "./useGetSetups";

const ListView: React.FC = () => {
    const [filter, setFilter] = useState<string | undefined>(undefined)
    const {data, isLoading, isFetching, isError} = useGetSetups(filter);
    const mapped = data == undefined ? [] : data
    const view = mapped.map(el => {
        return <List.Item key={el.id} style={{maxWidth: "30rem", marginInline: "auto"}}><SetupView
            data={el}/></List.Item>
    })
    return <Page>
            <section id={"list-header"} className={"section-container"}>
                <FilterComponent filter={filter} setFilter={setFilter}/>
            </section>
            <section id={"list-body"} className={"section-container-full"}>
                <div className={"h3"}>Danh sách kèo thơm</div>
                <List style={{
                    justifyContent: "center",
                    alignItems: "center",
                    maxHeight: "40rem",
                    overflowY: "scroll"
                }}>{view}</List>
            </section>
    </Page>
}
export default ListView
