import React, {PropsWithChildren} from "react";
import {Box} from "zmp-ui";
import {ListGroup} from "react-bootstrap";

const SportFilter: React.FC<{ name: string, icon: string }> = ({name, icon}) => {
    return <Box style={{textAlign: "center"}}
    >
        <div>{name}</div>
        <div>{icon}</div>
    </Box>
}

const ItemWrapper: React.FC<{
    name: string,
    filter: string | undefined,
    setFilter: (filter: string | undefined) => void
} & PropsWithChildren> = ({name, filter, setFilter, children}) => {
    return <ListGroup.Item style={{cursor: "pointer"}}
                           active={filter === name}
                           onClick={() => {
                               if (filter === name) setFilter(undefined)
                               else setFilter(name)
                           }}>{children}</ListGroup.Item>
}

const FilterComponent: React.FC<{
    filter: string | undefined,
    setFilter: (filter: string | undefined) => void
}> = ({filter, setFilter}) => {
    // TODO: put this into context or redux
    return <>
        <div className={"h3"}>Tìm kèo thơm</div>
        <ListGroup horizontal style={{justifyContent: "space-between", marginInline: "10rem"}}>
            <ItemWrapper name={"soccer"} filter={filter} setFilter={setFilter}>
                <SportFilter name={"Bóng đá"} icon={"⚽"}/>
            </ItemWrapper>
            <ItemWrapper name={"badminton"}
                         filter={filter} setFilter={setFilter}>
                <SportFilter name={"Cầu lông"} icon={"🏸"}/>
            </ItemWrapper>
            <ItemWrapper name={"basketball"}
                         filter={filter} setFilter={setFilter}>
                <SportFilter name={"Bóng rổ"} icon={"🏀"}/>
            </ItemWrapper>
            <ItemWrapper name={"swim"}
                         filter={filter} setFilter={setFilter}>
                <SportFilter name={"Bơi lội"} icon={"🏊"}/>
            </ItemWrapper>
        </ListGroup>
    </>
}

export default FilterComponent;
