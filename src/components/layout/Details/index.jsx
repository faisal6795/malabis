import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledDetailsTitle, StyledDetailsWrapper, StyledLeftContainer, StyledRightContainer, StyledTableContainer, StyledTableHeader, StyledTableValue } from './Details.styles';
import { LanguageContext } from '../../../containers/Language';

function Details({ data }) {

    const { dictionary } = useContext(LanguageContext);
    const title = dictionary.details;
    const heading = Object.keys(data);
    const values = Object.values(data);

    function getDetailsHeading() {
        return heading.map((item, index) => <StyledTableHeader key={index}>{item}</StyledTableHeader>);
    }

    function getDetailsValue() {
        return values.map((item, index) => <StyledTableValue key={index}>{item}</StyledTableValue>);
    }

    return <StyledDetailsWrapper>
        <StyledDetailsTitle>{title}</StyledDetailsTitle>
        <StyledTableContainer>
            <StyledLeftContainer>{getDetailsHeading()}</StyledLeftContainer>
            <StyledRightContainer>{getDetailsValue()}</StyledRightContainer>
        </StyledTableContainer>
    </StyledDetailsWrapper>
}

Details.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Details;