import React, { useEffect } from "react";
import { MyRow } from "./MyRow";
import { MySortableHeader } from "./MySortableHeader";

let data = require('../data/data.json');

export const MyTable = (props) => {
    useEffect(() => {
        // Adjust some table widths and heights using JS
        let maxWidthProduct = 0;
        let maxWidthTable = 0;
        for (let i in data) {
            for (let j in data[i]['Products']) {
                document.getElementById(`pn-${i}-${j}`).height = document.getElementById(`var-${i}-${j}`).offsetHeight;
                document.getElementById(`pn-${i}-${j}`).width = document.getElementById(`pn-header`).offsetWidth;
                maxWidthProduct = maxWidthProduct < document.getElementById(`pn-header`).offsetWidth? document.getElementById(`pn-header`).offsetWidth : maxWidthProduct;
                maxWidthTable = maxWidthTable < document.getElementById(`var-header`).offsetWidth? document.getElementById(`var-header`).offsetWidth : maxWidthTable;
            }
        }
        for (let i in data) {
            for (let j in data[i]['Products']) {
                document.getElementById(`pn-${i}-${j}`).width = maxWidthProduct;
                document.getElementById(`varBtn-${i}-${j}`).width = maxWidthTable;
            }
        }
        // Now we are ready. We can turn off the loading screen
        document.getElementById("overlay").style.display = "none";
    });
    return(
        <>
            <div id="overlay">
                <img src="/spinner.gif" alt="Loading animation" className="loading-img"/>
            </div>
            <table className="all-table-borders">
                    <tr className="table-header">
                        <th className="all-table-borders">ID</th>
                        <th className="all-table-borders"><MySortableHeader text="Priority"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Group"/></th>
                        <th id="pn-header" className="all-table-borders"><MySortableHeader text="Product Name"/></th>
                        <th id="var-header" className="all-table-borders">Variants</th>
                        <th className="all-table-borders"><MySortableHeader text="Address"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Created on"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Deadline delivery"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Assigned to"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Delivery to"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Receiver"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Sample size"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Application"/></th>
                        <th className="all-table-borders">Additional Info</th>
                        <th className="all-table-borders">Documents</th>
                        <th className="all-table-borders">Actions</th>
                    </tr>
                    {
                        data.map((element, idx) => {
                                return (
                                    <MyRow rowData={element} index={idx} key={idx}/>
                                )
                            })
                    }
            </table>
        </>);
};