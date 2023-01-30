import React, {useState} from 'react';

import {StyledHomeContainer} from "./styledHome";
import {StyledLabel} from "../elements/label/styledLabel";

import {recipes} from "../../utils/consts";
import Select from "react-select";
import RecipeTable from "./RecipeTable";

const HomeWrapper = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    return (
        <StyledHomeContainer content>
            <StyledLabel>Select recipe:</StyledLabel>
            <Select
                defaultValue={selectedRecipe}
                onChange={setSelectedRecipe}
                options={recipes}
            />
            {selectedRecipe &&
                <>
                    <h2>{selectedRecipe.label}</h2>
                    <RecipeTable
                        value={selectedRecipe}
                    />
                </>
            }
        </StyledHomeContainer>
    )
}

export default HomeWrapper;