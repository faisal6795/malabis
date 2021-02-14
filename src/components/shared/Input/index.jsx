import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledInputWrapper, StyledLabel } from './Input.styles';

function Input({ labelText, saveText, attrs, customClass }) {

    function changeEvent(event) {
        saveText(event.target.value, labelText);
    }

    return <StyledInputWrapper className={customClass}>
        <StyledInput onChange={changeEvent} required={true} {...attrs} />
        <StyledLabel>{labelText}</StyledLabel>
    </StyledInputWrapper>
}

Input.propTypes = {
    labelText: PropTypes.string.isRequired,
    saveText: PropTypes.func.isRequired,
    attrs: PropTypes.object,
    customClass: PropTypes.string,
}

export default Input;