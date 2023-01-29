import React from 'react';

import {AuthorLink, StyledHeader, StyledHeaderContainer} from "./styledHeader";

const Header = () => {
    return(
        <StyledHeader>
            <StyledHeaderContainer>
                Bakery Price Counter
                <AuthorLink href="https://github.com/garcondeau" target="_blank"/>
            </StyledHeaderContainer>
        </StyledHeader>
    )
}

export default Header;