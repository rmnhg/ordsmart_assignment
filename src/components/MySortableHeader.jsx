import React from "react";
import { Container } from 'react-bootstrap';

export const MySortableHeader = (props) => {
    return(
        <Container>
            <div>
                <div onClick={() => props.sort(props.text)}><img src="/sort.png" alt="sort icon" className="sort-icon"/></div>
                {props.text}
            </div>
        </Container>
    );
};