import React, { useEffect } from "react";
import {Container} from "react-bootstrap";
import { MyRow } from "./MyRow";

let data = require('../data/data.json');

export const MyTable = (props) => {
    useEffect(() => {
        for (let i in data) {
            for (let j in data[i]['Products']) {
                document.getElementById(`pn-${i}-${j}`).height = document.getElementById(`var-${i}-${j}`).offsetHeight;
                document.getElementById(`pn-${i}-${j}`).width = document.getElementById(`pn-header`).offsetWidth;
                document.getElementById(`varCol-${i}-${j}`).width = document.getElementById(`var-header`).offsetWidth;
            }
        }
      });
    return(
        <Container>
            <table>
                    <tr class="table-header">
                        <th>ID</th>
                        <th>Priority</th>
                        <th>Group</th>
                        <th id="pn-header">Product Name</th>
                        <th id="var-header">Variants</th>
                        <th>Address</th>
                        <th>Created on</th>
                        <th>Deadline delivery</th>
                        <th>Assigned to</th>
                        <th>Delivery to</th>
                        <th>Receiver</th>
                        <th>Sample size</th>
                        <th>Application</th>
                        <th>Additional info</th>
                        <th>Documents</th>
                        <th>Actions</th>
                    </tr>
                    {
                    data.map((element, idx) => {
                            return (
                                <MyRow rowData={element} index={idx} key={idx}/>
                            )
                        })
                    }
            </table>
        </Container>);

/*export const MyTable = (props) => {
    return(
        <Container>
            <table>
                    <tr>
                        <th>ID</th>
                        <th>Priority</th>
                        <th>Group</th>
                        <th>Product Name</th>
                        <th>Variants</th>
                        <th>Address</th>
                        <th>Created on</th>
                        <th>Deadline delivery</th>
                        <th>Assigned to</th>
                        <th>Delivery to</th>
                        <th>Receiver</th>
                        <th>Sample size</th>
                        <th>Application</th>
                        <th>Additional info</th>
                        <th>Documents</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>#67</td>
                        <td>High</td>
                        <td>BIGYAY</td>
                        <td>
                            <tr>
                                <td>Milk Concentrate Protein</td>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <td>
                                    <tr>View all</tr>
                                    <tr>
                                        <table>
                                                <tr>
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                                                <tr>
                                                    <td>75%</td>
                                                    <td>Vannille</td>
                                                    <td>2500g</td>
                                                    <td>90g</td>
                                                </tr>
                                                <tr>
                                                    <td>75%</td>
                                                    <td>Vannille</td>
                                                    <td>2500g</td>
                                                    <td>90g</td>
                                                </tr>
                                                <tr>
                                                    <td>75%</td>
                                                    <td>Vannille</td>
                                                    <td>2500g</td>
                                                    <td>90g</td>
                                                </tr>
                                        </table>
                                    </tr>
                                </td>
                            </tr>
                        </td>
                        <td>3761 Park<br/>Boulevard Way</td>
                        <td>11-02-2023</td>
                        <td>17-02-2023</td>
                        <td>#6363</td>
                        <td>SAN FRANCISCO, CA</td>
                        <td>Amazing<br/>Brand Inc.</td>
                        <td>2 jars</td>
                        <td>Replace<br/>Ingredient</td>
                        <td>Caller name test - different domain</td>
                        <td>Tech requirements.pdf<br/>Tech requirements.pdf</td>
                        <td>TODO-BUTTONS</td>
                    </tr>
                    <tr>
                        <td>#68</td>
                        <td>High</td>
                        <td>VitaPlus</td>
                        <td>
                            <tr>
                                <td>Milk Concentrate Protein</td>
                            </tr>
                            <tr>
                                <td>BCAA</td>
                            </tr>
                            <tr>
                                <td>Creatine</td>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <td>
                                    <tr>View all</tr>
                                    <tr>
                                        <table>
                                                <tr>
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                            
                            
                                                <tr>
                                                    <td>75%</td>
                                                    <td>Vannille</td>
                                                    <td>2500g</td>
                                                    <td>90g</td>
                                                </tr>
                                                <tr>
                                                    <td>75%</td>
                                                    <td>Chocolate</td>
                                                    <td>2500g</td>
                                                    <td>90g</td>
                                                </tr>
                                        </table>
                                    </tr>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <tr>View all</tr>
                                    <tr>
                                        <table>
                                                <tr>
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                            
                            
                                                <tr>
                                                    <td>48%</td>
                                                    <td>Apple</td>
                                                    <td>800g</td>
                                                    <td>60g</td>
                                                </tr>
                                        </table>
                                    </tr>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <tr>View all</tr>
                                    <tr>
                                        <table>
                                                <tr>
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                                                <tr>
                                                    <td>95%</td>
                                                    <td>Apple</td>
                                                    <td>1000g</td>
                                                    <td>60g</td>
                                                </tr>
                                                <tr>
                                                    <td>82%</td>
                                                    <td>Chocolate</td>
                                                    <td>400g</td>
                                                    <td>80g</td>
                                                </tr>
                                        </table>
                                    </tr>
                                </td>
                            </tr>
                        </td>
                        <td>3761 Park<br/>Boulevard Way</td>
                        <td>11-02-2023</td>
                        <td>17-02-2023</td>
                        <td>#6363</td>
                        <td>SAN FRANCISCO, CA</td>
                        <td>Amazing<br/>Brand Inc.</td>
                        <td>2 jars</td>
                        <td>Replace<br/>Ingredient</td>
                        <td>Caller name test - different domain</td>
                        <td>Tech requirements.pdf<br/>Tech requirements.pdf</td>
                        <td>TODO-BUTTONS</td>
                    </tr>
                    <tr>
                        <td>#72</td>
                        <td>High</td>
                        <td>BIGYAY</td>
                        <td>
                            <tr>
                                <td>BCAA</td>
                            </tr>
                            <tr>
                                <td>Omega 3</td>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <td>
                                    <tr>View all</tr>
                                    <tr>
                                        <table>
                                                <tr>
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                            
                            
                                                <tr>
                                                    <td>75%</td>
                                                    <td>Vannille</td>
                                                    <td>2500g</td>
                                                    <td>90g</td>
                                                </tr>
                            
                                        </table>
                                    </tr>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <tr>View all</tr>
                                    <tr>
                                        <table>
                                                <tr>
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                                                <tr>
                                                    <td>75%</td>
                                                    <td>Vannille</td>
                                                    <td>2500g</td>
                                                    <td>90g</td>
                                                </tr>
                                        </table>
                                    </tr>
                                </td>
                            </tr>
                        </td>
                        <td>3761 Park<br/>Boulevard Way</td>
                        <td>11-02-2023</td>
                        <td>17-02-2023</td>
                        <td>#6363</td>
                        <td>SAN FRANCISCO, CA</td>
                        <td>Amazing<br/>Brand Inc.</td>
                        <td>2 jars</td>
                        <td>Replace<br/>Ingredient</td>
                        <td>Caller name test - different domain</td>
                        <td>Tech requirements.pdf<br/>Tech requirements.pdf</td>
                        <td>TODO-BUTTONS</td>
                    </tr>
                    <tr>
                        <td>#76</td>
                        <td>High</td>
                        <td>BIGYAY</td>
                        <td>
                            <tr>
                                <td>Milk Concentrate Protein</td>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <td>
                                    <tr>View all</tr>
                                    <tr>
                                        <table>
                                                <tr>
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                                                <tr>
                                                    <td>75%</td>
                                                    <td>Vannille</td>
                                                    <td>2500g</td>
                                                    <td>90g</td>
                                                </tr>
                                        </table>
                                    </tr>
                                </td>
                            </tr>
                        </td>
                        <td>3761 Park<br/>Boulevard Way</td>
                        <td>11-02-2023</td>
                        <td>17-02-2023</td>
                        <td>#6363</td>
                        <td>SAN FRANCISCO, CA</td>
                        <td>Amazing<br/>Brand Inc.</td>
                        <td>2 jars</td>
                        <td>Replace<br/>Ingredient</td>
                        <td>Caller name test - different domain</td>
                        <td>Tech requirements.pdf<br/>Tech requirements.pdf</td>
                        <td>TODO-BUTTONS</td>
                    </tr>

            </table>
        </Container>);*/
};