import React from "react";
import { Button, Container, Col, Image } from 'react-bootstrap';
import { MyPill } from "./MyPill";

export const MyRow = (props) => {
    return(
            <tr>
                <td className="main-table"><MyPill text={props.rowData['id']} type="light-grey-pill"/></td>
                <td className="main-table"><MyPill text={"↑ " + props.rowData['Priority']}/></td>
                <td className="main-table">{props.rowData['Group']}</td>
                <td className="main-table">{
                        props.rowData['Products'].map((product, idx) => {
                            return (
                                <tr>
                                    <td id={"pn-" + props.index + "-" + idx} className={(idx < props.rowData['Products'].length - 1) && "products-column"}>{product['Product Name']}</td>
                                </tr>
                            ); 
                        })
                    }
                </td>
                <td>
                    {
                    props.rowData['Products'].map((product, idx) => {
                        return(
                            <tr id={"var-" + props.index + "-" + idx}>
                                <td className="variants-column">
                                    <tr className="dark-grey-row">
                                        <td id={"varBtn-" + props.index + "-" + idx}>
                                            <Button variant="secondary">View all</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <table className="nested-table">
                                                <tr className="dark-blue-header">
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                                                {
                                                    product['Variants'].map((variant, idx) => {
                                                        return (
                                                            <tr>
                                                                <td><MyPill text={variant['% concentration']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></td>
                                                                <td><MyPill text={variant['Flavour']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></td>
                                                                <td><MyPill text={variant['Weight']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></td>
                                                                <td><MyPill text={variant['Squirrels']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                        </table>
                                    </tr>
                                </td>
                            </tr>
                        );
                    })
                    }
                </td>
                <td className="main-table">{props.rowData['Address']}</td>
                <td className="main-table"><MyPill text={props.rowData['Created on']}/></td>
                <td className="main-table"><MyPill text={props.rowData['Deadline delivery']}/></td>
                <td className="main-table"><MyPill text={props.rowData['Assigned to']}/></td>
                <td className="main-table"><MyPill text={props.rowData['Delivery to']}/></td>
                <td className="main-table">{props.rowData['Receiver']}</td>
                <td className="main-table"><MyPill text={props.rowData['Sample size']}/></td>
                <td className="main-table">{props.rowData['Application']}</td>
                <td className="main-table">{props.rowData['Additional Info']}</td>
                <td className="main-table">
                    <Container>
                        <Col>
                        {
                            props.rowData['Documents'].map((document, _) => {
                            return (
                                <div>
                                    <Image src="/file.png" roundedCircle style={{"height": "20px"}}/>
                                    <>{document}</>
                                </div>
                                );
                            })
                        }
                        </Col>
                    </Container>
                </td>
                <td className="main-table actions-bg">
                    <div>
                        <button type="button" class="btn btn-success action-btn">✓</button><br/>
                        <button type="button" class="btn btn-danger action-btn">⨉</button><br/>
                        <button type="button" class="btn btn-secondary action-btn">...</button>
                    </div>
                </td>
            </tr>
    );
};