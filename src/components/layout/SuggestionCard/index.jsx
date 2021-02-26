import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledSuggestionCardWrapper, StyledSuggestionContainer, StyledSuggestionImage, StyledSuggestionPrice, StyledSuggestionTitle } from './SuggestionCard.styles';
import { ACTION } from '../../../constants';

function SuggestionCard({ id, name, images, price }) {

    const dispatch = useDispatch();

    function setCurrentProduct() {
        dispatch({
            type: ACTION.SET_CURRENT,
            value: id
        });
    }

    return <StyledSuggestionCardWrapper>
        <Link to={`${process.env.PUBLIC_URL}/product`} onClick={setCurrentProduct}>
            <StyledSuggestionImage image={images[0]} />
            <StyledSuggestionContainer>
                <StyledSuggestionTitle>{name}</StyledSuggestionTitle>
                <StyledSuggestionPrice>{new Intl.NumberFormat('en-IN').format(price)}</StyledSuggestionPrice>
            </StyledSuggestionContainer>
        </Link>
    </StyledSuggestionCardWrapper>
}

SuggestionCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
};

export default SuggestionCard;