import React from "react";
import {Box, Icon, List} from "zmp-ui";

const FilterComponent: React.FC = () => {
    return <>
        <div className={"h3"}>Tìm kèo thơm</div>
        <Box flex style={{ justifyContent : "space-between", marginInline: "10rem"}}>
            <span>⚽</span>
            <span>⚽</span>
            <span>⚽</span>
            <span>⚽</span>
        </Box>
    </>
}

export default FilterComponent;
