import React from "react";
import { Container } from 'react-bootstrap';

export const MySortableHeader = (props) => {
    return(
        <Container>
            <div>
                <img src="/sort.png" alt="sort icon" className="sort-icon"/>
                {props.text}
            </div>
        </Container>
    );
};