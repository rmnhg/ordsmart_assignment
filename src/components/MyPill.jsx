import React from "react";

export const MyPill = (props) => {
    return(<span className={(props.type || "grey-pill") + " badge rounded-pill"}>{props.text}</span>);
};