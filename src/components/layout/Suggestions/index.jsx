import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SuggestionCard from '../SuggestionCard';
import { StyledSuggestionsContainer, StyledSuggestionsHeading, StyledSuggestionsWrapper, StyledViewAll } from './Suggestions.styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LanguageContext } from '../../../containers/Language';

function Suggestions({ title }) {

    const { dictionary } = useContext(LanguageContext);
    const productSuggestion = getSuggestions(useSelector(state => state.products));

    function getSuggestions(data) {
        const tempData = JSON.parse(JSON.stringify(data));
        let count = 4, suggestions = [];
        while (count > 0) {
            suggestions.push(tempData.splice(Math.floor(Math.random() * tempData.length), 1)[0]);
            count--;
        }
        return suggestions;
    }

    function getSuggestionCards() {
        return productSuggestion.map(product => <SuggestionCard key={product.id} {...product} />)
    }

    return <StyledSuggestionsWrapper>
        <StyledSuggestionsHeading>{title}</StyledSuggestionsHeading>
        <Link to='/'>
            <StyledViewAll>{dictionary.viewAll}</StyledViewAll>
        </Link>
        <StyledSuggestionsContainer>{getSuggestionCards()}</StyledSuggestionsContainer>
    </StyledSuggestionsWrapper>
}

Suggestions.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Suggestions;