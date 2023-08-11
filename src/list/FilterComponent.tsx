import React from "react";
import {Box} from "zmp-ui";

const SportFilter: React.FC<{ name: string, icon: string }> = ({name, icon}) => {
    return <Box style={{textAlign: "center"}}>
        <div>{name}</div>
        <div>{icon}</div>
    </Box>
}

const FilterComponent: React.FC = () => {
    return <>
        <div className={"h3"}>Tìm kèo thơm</div>
        <Box flex style={{justifyContent: "space-between", marginInline: "10rem"}}>
            <SportFilter name={"Bóng đá"} icon={"⚽"}/>
            <SportFilter name={"Cầu lông"} icon={"🏸"}/>
            <SportFilter name={"Bóng rổ"} icon={"🏀"}/>
            <SportFilter name={"Bơi lội"} icon={"🏊"}/>
        </Box>
    </>
}

export default FilterComponent;
