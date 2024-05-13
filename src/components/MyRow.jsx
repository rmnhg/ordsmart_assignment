import React from "react";
import { Button, Container, Col, Image, Dropdown } from 'react-bootstrap';
import { MyPill } from "./MyPill";

export const MyRow = (props) => {
    return(
            <tr>
                <td className="all-table-borders"><MyPill text={props.rowData['id']} type="light-grey-pill"/></td>
                <td className="all-table-borders"><MyPill text={"↑ " + props.rowData['Priority']}/></td>
                <td className="all-table-borders">{props.rowData['Group']}</td>
                <td className="all-table-borders">{
                        props.rowData['Products'].map((product, idx) => {
                            return (
                                <tr>
                                    <td id={"pn-" + props.index + "-" + idx} className={(idx < props.rowData['Products'].length - 1) && "products-column"}>{product['Product Name']}</td>
                                </tr>
                            ); 
                        })
                    }
                </td>
                <td className="all-table-borders">
                    {
                    props.rowData['Products'].map((product, idx) => {
                        return(
                            <tr id={"var-" + props.index + "-" + idx} className={(idx < props.rowData['Products'].length - 1) && "middle-nested-table"}>
                                <td className="variants-column">
                                    <tr className="dark-grey-row">
                                        <td id={"varBtn-" + props.index + "-" + idx}>
                                            <Button variant="secondary">View all</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <table className="nested-table">
                                                <tr className="dark-blue-header">
                                                    <th className="nested-table-external">% concentration</th>
                                                    <th className="all-table-borders">Flavour</th>
                                                    <th className="all-table-borders">Weight</th>
                                                    <th className="nested-table-external">Squirrels</th>
                                                </tr>
                                                {
                                                    product['Variants'].map((variant, idx) => {
                                                        return (
                                                            <tr>
                                                                <td className="nested-table-external"><MyPill text={variant['% concentration']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></td>
                                                                <td className="nested-table-internal"><MyPill text={variant['Flavour']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></td>
                                                                <td className="nested-table-internal"><MyPill text={variant['Weight']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></td>
                                                                <td className="nested-table-external"><MyPill text={variant['Squirrels']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></td>
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
                <td className="all-table-borders">{props.rowData['Address']}</td>
                <td className="all-table-borders"><MyPill text={props.rowData['Created on']}/></td>
                <td className="all-table-borders"><MyPill text={props.rowData['Deadline delivery']}/></td>
                <td className="all-table-borders"><MyPill text={props.rowData['Assigned to']}/></td>
                <td className="all-table-borders"><MyPill text={props.rowData['Delivery to']}/></td>
                <td className="all-table-borders">{props.rowData['Receiver']}</td>
                <td className="all-table-borders"><MyPill text={props.rowData['Sample size']}/></td>
                <td className="all-table-borders">{props.rowData['Application']}</td>
                <td className="all-table-borders">{props.rowData['Additional Info']}</td>
                <td className="all-table-borders">
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
                <td className="all-table-borders actions-bg">
                    <div>
                        <button type="button" class="btn btn-success action-btn">✓</button><br/>
                        <button type="button" class="btn btn-danger action-btn">⨉</button><br/>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><img src="/pencil.png" alt="Pencil icon" className="dropdown-action-icon"/><span className="dropdown-action">Edit Request</span></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><img src="/document.png" alt="Notes icon" className="dropdown-action-icon"/><span className="dropdown-action">Notes</span></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </td>
            </tr>
    );
};