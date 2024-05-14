import React, { useState } from "react";
import { Button, Container, Col, Image, Dropdown, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import { MyPill } from "./MyPill";

export const MyRow = (props) => {
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    const handleClose = () => setShowConfirmationDialog(false);
    const handleShow = () => setShowConfirmationDialog(true);

    const marginStyle = {"margin-left": "15px", "margin-right": "15px"};
    const nestedMarginStyle = {"margin-left": "15px", "margin-right": "15px", "margin-top": "10px", "margin-bottom": "10px"};
    const viewAllButtonStyle = {"margin-top": "5px", "margin-bottom": "5px"};
    const tooltipTimes = { show: 150, hide: 150 };
    const renderTooltip = (props, text) => (
        <Tooltip id="button-tooltip" {...props}>
          {text}
        </Tooltip>
      );
    return(
            <tr>
                <td className="all-table-borders"><div style={marginStyle}><MyPill text={props.rowData['id']} type="light-grey-pill"/></div></td>
                <td className="all-table-borders"><div style={marginStyle}><MyPill text={"↑ " + props.rowData['Priority']}/></div></td>
                <td className="all-table-borders"><div style={marginStyle}>{props.rowData['Group']}</div></td>
                <td className="all-table-borders">{
                        props.rowData['Products'].map((product, idx) => {
                            return (
                                <tr>
                                    <td id={"pn-" + props.index + "-" + idx} className={(idx < props.rowData['Products'].length - 1) && "products-column"}><div style={marginStyle}>{product['Product Name']}</div></td>
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
                                            <div style={viewAllButtonStyle}><Button variant="secondary">View all</Button></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <table className="nested-table">
                                                <tr className="dark-blue-header">
                                                    <th className="nested-table-external"><div style={marginStyle}>% concentration</div></th>
                                                    <th className="all-table-borders"><div style={marginStyle}>Flavour</div></th>
                                                    <th className="all-table-borders"><div style={marginStyle}>Weight</div></th>
                                                    <th className="nested-table-external"><div style={marginStyle}>Squirrels</div></th>
                                                </tr>
                                                {
                                                    product['Variants'].map((variant, idx) => {
                                                        return (
                                                            <tr>
                                                                <td className="nested-table-external"><div style={nestedMarginStyle}><MyPill text={variant['% concentration']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></div></td>
                                                                <td className="nested-table-internal"><div style={nestedMarginStyle}><MyPill text={variant['Flavour']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></div></td>
                                                                <td className="nested-table-internal"><div style={nestedMarginStyle}><MyPill text={variant['Weight']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></div></td>
                                                                <td className="nested-table-external"><div style={nestedMarginStyle}><MyPill text={variant['Squirrels']} type={idx % 2? "blue-pill" : "light-grey-pill"}/></div></td>
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
                <td className="all-table-borders"><div style={marginStyle}>{props.rowData['Address']}</div></td>
                <td className="all-table-borders"><div style={marginStyle}><MyPill text={props.rowData['Created on']}/></div></td>
                <td className="all-table-borders"><div style={marginStyle}><MyPill text={props.rowData['Deadline delivery']}/></div></td>
                <td className="all-table-borders"><div style={marginStyle}><MyPill text={props.rowData['Assigned to']}/></div></td>
                <td className="all-table-borders"><div style={marginStyle}><MyPill text={props.rowData['Delivery to']}/></div></td>
                <td className="all-table-borders"><div style={marginStyle}>{props.rowData['Receiver']}</div></td>
                <td className="all-table-borders"><div style={marginStyle}><MyPill text={props.rowData['Sample size']}/></div></td>
                <td className="all-table-borders"><div style={marginStyle}>{props.rowData['Application']}</div></td>
                <td className="all-table-borders"><div style={marginStyle}>{props.rowData['Additional Info']}</div></td>
                <td className="all-table-borders">
                    <Container>
                        <Col>
                        {
                            props.rowData['Documents'].map((document, _) => {
                            return (
                                <div style={marginStyle}>
                                    <Image src="/file.png" roundedCircle style={{"height": "20px"}}/>
                                    <>{document}</>
                                </div>
                                );
                            })
                        }
                        </Col>
                    </Container>
                </td>
                <td className="all-table-borders actions-bg actions-column">
                    <div>
                        <OverlayTrigger placement="left" delay={tooltipTimes} overlay={(props) => renderTooltip(props, "Confirm request")}>
                            <button type="button" class="btn btn-success action-btn" onClick={() => props.removeRow(props.rowData['id'])}>✓</button>
                        </OverlayTrigger>
                        <br/>
                        <OverlayTrigger placement="left" delay={tooltipTimes} overlay={(props) => renderTooltip(props, "Remove request")}>
                            <button type="button" class="btn btn-danger action-btn" onClick={handleShow}>⨉</button>
                        </OverlayTrigger>
                        <br/>
                        <Dropdown>
                            <OverlayTrigger placement="left" delay={tooltipTimes} overlay={(props) => renderTooltip(props, "More actions")}>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    ...
                                </Dropdown.Toggle>
                            </OverlayTrigger>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><img src="/pencil.png" alt="Pencil icon" className="dropdown-action-icon"/><span className="dropdown-action">Edit Request</span></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><img src="/document.png" alt="Notes icon" className="dropdown-action-icon"/><span className="dropdown-action">Notes</span></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Modal show={showConfirmationDialog} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Confirm remove</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{"Are you sure you want to delete the row with ID " + props.rowData['id'] + "?"}</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                No
                            </Button>
                            <Button variant="danger" onClick={() => {props.removeRow(props.rowData['id']); handleClose()}}>
                                Yes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </td>
            </tr>
    );
};