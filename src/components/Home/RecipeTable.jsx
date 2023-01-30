import React from 'react';

import {
    StyledTable,
    StyledTableBody,
    StyledTableCell,
    StyledTableHeader,
    StyledTableRow
} from "../elements/table/styledTable";
import {products, recipes} from "../../utils/consts";

const RecipeTable = ({value}) => {

    let price = 0;
    const getComponents = (component) => {
        try {
            price += products[component[0]].price * (component[1] / 100)
            return `${products[component[0]].label} (${products[component[0]].type})`
        }
        catch (error) {
            try {
                let result = recipes.find(recipe => recipe.value === component[0]);
                Object.entries(result.components).map(subComponent => (
                    price += products[subComponent[0]].price * (subComponent[1] / 100)
                ))
                return `${result.label}`;
            }
            catch (error) {
                return "Undefined component"

            }
        }
    }


    return(
        <>
            <StyledTable>
                <StyledTableHeader>
                    <StyledTableRow>
                        <StyledTableCell>
                            Name
                        </StyledTableCell>
                        <StyledTableCell>
                            Amount
                        </StyledTableCell>
                    </StyledTableRow>
                </StyledTableHeader>
                <StyledTableBody>
                    {Object.entries(value.components).map((component, key) => (
                        <StyledTableRow key={key}>
                            <StyledTableCell>{getComponents(component)}</StyledTableCell>
                            <StyledTableCell>{component[1]}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    <StyledTableRow className="price">
                        <StyledTableCell>
                            Price per 100g
                        </StyledTableCell>
                        <StyledTableCell>
                            {Math.round(price * 100)/100} CAD
                        </StyledTableCell>
                    </StyledTableRow>
                </StyledTableBody>
            </StyledTable>
        </>
    )
}

export default RecipeTable;