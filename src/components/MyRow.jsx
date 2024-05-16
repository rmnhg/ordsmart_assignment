import React, { useState } from "react";
import { Button, Container, Col, Image, Dropdown, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import { MyPill } from "./MyPill";

export const MyRow = (props) => {
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    const handleClose = () => setShowConfirmationDialog(false);
    const handleShow = () => setShowConfirmationDialog(true);

    const tooltipTimes = { show: 150, hide: 150 };
    const renderTooltip = (props, text) => (
        <Tooltip id="button-tooltip" {...props}>
          {text}
        </Tooltip>
    );

    const getTotalRows = (data) => {
        let res = 0;
        for (let product of data['Products']) {
            res += product['Variants'].length + 2;
        }
        return res;
    };

    const getNumberOfRowsPerProduct = (data, productName) => {
        let res = 0;
        for (let product of data['Products']) {
            if (product["Product Name"] === productName) {
                res = product['Variants'].length + 2;
                break;
            }
        }
        return res;
    }

    let productIdx = 0;
    let currentProduct = props.rowData['Products'][productIdx];
    let currentRowInProduct = -3;
    let keys = [];
    let variantValues = [];
    return(
    <>
        {
        [...Array(getTotalRows(props.rowData)).keys()].map((_, row) => {
            currentRowInProduct++;
            variantValues = [];
            // Save the keys of the current product variants
            keys = Object.keys(currentProduct['Variants'][0]);
            // Jump to the next product if there are still more products to be processed
            if (currentRowInProduct === currentProduct['Variants'].length) {
                productIdx++;
                // Exit the loop if we are done with the products
                if (productIdx === props.rowData['Products'].length) {
                    return(<></>);
                }
                // Set the new product
                currentProduct = props.rowData['Products'][productIdx];
                currentRowInProduct = -2;
            }
            if (currentRowInProduct >= 0 && currentRowInProduct < currentProduct['Variants'].length) {
                // Save the values of the variants to the variantValues variable
                for (let key of keys) {
                    variantValues.push(currentProduct['Variants'][currentRowInProduct][key]);
                }
            }
            return (
                <tr key={row}>
                    {row === 0 /* Add all the general data */?
                    <>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins"><MyPill text={props.rowData['id']} type="light-grey-pill"/></div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins"><MyPill text={props.rowData['Priority'] === "High"? "↑ " + props.rowData['Priority'] : "↓ " + props.rowData['Priority']}/></div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins">{props.rowData['Group']}</div></td>
                    </> : <></>
                    }
                    {currentRowInProduct === -2 /* View all*/?
                        <>
                            <td className="all-table-borders" rowSpan={getNumberOfRowsPerProduct(props.rowData, currentProduct['Product Name'])}><div className="cell-margins">{currentProduct['Product Name']}</div></td>
                            <td className="all-table-borders variants-column dark-grey-row" colSpan="4">
                                <div className="view-all-button"><button type="button" class="btn btn-secondary view-all-button-margins">View all</button></div>
                            </td>
                        </> : <></>
                    }
                    {currentRowInProduct === -1 /* Variants table headers */?
                        keys.map((columnName, idx) => {
                            return(
                                <td className="all-table-borders dark-blue-header" key={idx}>
                                    <div className="cell-margins">{columnName}</div>
                                </td>
                            );
                        })
                        : <></>
                    }
                    {currentRowInProduct >= 0 && (currentRowInProduct < currentProduct['Variants'].length) /* the variants table row which needs to be appended with data*/?
                        (currentRowInProduct % 2?
                            variantValues.map((value, idx) =>
                                <td className="all-table-borders" key={idx}>
                                    <div className="variants-margins variants-column"><MyPill text={value} type={"blue-pill"}/></div>
                                </td>
                            ) :
                            variantValues.map((value, idx) =>
                                <td className="all-table-borders" key={idx}>
                                    <div className="variants-margins variants-column"><MyPill text={value} type={"light-grey-pill"}/></div>
                                </td>
                            )
                        )
                        : <></>
                    }
                    {row === 0 /* Add the rest of the general data */?
                    <>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins">{props.rowData['Address']}</div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins"><MyPill text={props.rowData['Created on']}/></div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins"><MyPill text={props.rowData['Deadline delivery']}/></div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins"><MyPill text={props.rowData['Assigned to']}/></div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins"><MyPill text={props.rowData['Delivery to']}/></div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins">{props.rowData['Receiver']}</div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins"><MyPill text={props.rowData['Sample size']}/></div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins">{props.rowData['Application']}</div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins">{props.rowData['Additional Info']}</div></td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}>
                            <Container>
                                <Col>
                                {
                                    props.rowData['Documents'].map((document, idx) => {
                                    return (
                                        <div className="cell-margins" key={idx}>
                                            <Image src="/file.png" roundedCircle className="file-icon"/>
                                            <>{document}</>
                                        </div>
                                        );
                                    })
                                }
                                </Col>
                            </Container>
                        </td>
                        <td className="all-table-borders" rowSpan={getTotalRows(props.rowData)}><div className="cell-margins notes">{props.rowData['Notes']}</div></td>
                        <td className="all-table-borders actions-bg actions-column" rowSpan={getTotalRows(props.rowData)}>
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
                    </> : <></>
                    }
                </tr>
            );
        })
        }
    </>
    );
};