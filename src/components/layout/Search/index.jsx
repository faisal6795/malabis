import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchIcon, StyledSearchInput, StyledWrapper, StyledClearIcon } from './Search.styles';
import { LanguageContext } from '../../../containers/Language';

function Search({ searchValue }) {

    const { dictionary } = useContext(LanguageContext);
    const [searchText, setSearchText] = useState('');

    function changeEvent(event) {
        searchValue(event.target.value);
        setSearchText(event.target.value);
    }

    function onFocus(event) {
        event.target.select();
    }

    function onMouseUp(event) {
        event.preventDefault();
    }

    function clearText(event) {
        event.target.previousElementSibling.value = '';
        searchValue('');
        setSearchText('');
    }

    return <StyledWrapper>
        <StyledSearchIcon />
        <StyledSearchInput placeholder={dictionary.search} onChange={changeEvent} onFocus={onFocus} onMouseUp={onMouseUp} />
        {searchText && <StyledClearIcon onClick={clearText} />}
    </StyledWrapper>
}

Search.propTypes = {
    searchValue: PropTypes.func.isRequired,
}

export default Search;