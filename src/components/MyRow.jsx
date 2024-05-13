import React from "react";

export const MyRow = (props) => {
    return(
            <tr>
                <td>{props.rowData['id']}</td>
                <td>{props.rowData['Priority']}</td>
                <td>{props.rowData['Group']}</td>
                <td>{
                        props.rowData['Products'].map((product, idx) => {
                        return (
                            <tr>
                                <td id={"pn-" + props.index + "-" + idx}>{product['Product Name']}</td>
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
                                <td>
                                    <tr class="dark-grey-row">View all</tr>
                                    <tr>
                                        <table id={"varCol-" + props.index + "-" + idx}>
                                                <tr class="dark-blue-header">
                                                    <th>% concentration</th>
                                                    <th>Flavour</th>
                                                    <th>Weight</th>
                                                    <th>Squirrels</th>
                                                </tr>
                                                {
                                                    product['Variants'].map((variant, _) => {
                                                        return (
                                                            <tr>
                                                                <td>{variant['% concentration']}</td>
                                                                <td>{variant['Flavour']}</td>
                                                                <td>{variant['Weight']}</td>
                                                                <td>{variant['Squirrels']}</td>
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
);

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