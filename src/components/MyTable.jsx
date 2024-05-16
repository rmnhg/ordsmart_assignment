import React, { useEffect, useState } from "react";
import { MyRow } from "./MyRow";
import { MySortableHeader } from "./MySortableHeader";

let data = require('../data/data.json');

export const MyTable = (props) => {
    const [dataRows, setDataRows] = useState(data);

    const removeRow = (id) => {
        console.log("Removing row with id: "+id);
        let newDataRows = JSON.parse(JSON.stringify(dataRows));
        let idx = -1;
        newDataRows.map((array, pos) => {
            console.log(array);
            if (array['id'] === id)
                idx = pos;
            return pos;
        });
        newDataRows.splice(idx, 1);
        setDataRows(newDataRows);
    };

    useEffect(() => {
        // Now we are ready. We can turn off the loading screen
        document.getElementById("overlay").style.display = "none";
    });
    return(
        <>
            <div id="overlay">
                <img src="/spinner.gif" alt="Loading animation" className="loading-img"/>
            </div>
            <table className="all-table-borders">
                <thead>
                    <tr className="table-header">
                        <th className="all-table-borders"><div className="cell-margins">ID</div></th>
                        <th className="all-table-borders"><MySortableHeader text="Priority"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Group"/></th>
                        <th id="pn-header" className="all-table-borders"><MySortableHeader text="Product Name"/></th>
                        <th id="var-header" className="all-table-borders" colSpan="4"><div className="cell-margins">Variants</div></th>
                        <th className="all-table-borders"><MySortableHeader text="Address"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Created on"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Deadline delivery"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Assigned to"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Delivery to"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Receiver"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Sample size"/></th>
                        <th className="all-table-borders"><MySortableHeader text="Application"/></th>
                        <th className="all-table-borders"><div className="cell-margins">Additional Info</div></th>
                        <th className="all-table-borders"><div className="cell-margins">Documents</div></th>
                        <th className="all-table-borders"><div className="cell-margins">Notes</div></th>
                        <th className="all-table-borders"><div className="cell-margins">Actions</div></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataRows.map((element, idx) => {
                                return (
                                    <MyRow rowData={element} index={idx} key={idx} removeRow={removeRow}/>
                                )
                            })
                    }
                </tbody>
            </table>
        </>);
};