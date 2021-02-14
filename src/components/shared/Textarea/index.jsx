import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea, StyledTextareaWrapper, StyledLabel } from './Textarea.styles';

function Textarea({ labelText, saveText, attrs }) {

    function changeEvent(event) {
        saveText(event.target.value, labelText);
    }

    function keypressEvent(event) {
        if (event.key === "Enter") {
            event.target.value.split(/\r\n|\r|\n/).length > 2 && event.preventDefault();
        }
    }

    return <StyledTextareaWrapper>
        <StyledTextarea onChange={changeEvent} onKeyPress={keypressEvent} {...attrs} required={true}></StyledTextarea>
        <StyledLabel>{labelText}</StyledLabel>
    </StyledTextareaWrapper>
}

Textarea.propTypes = {
    labelText: PropTypes.string.isRequired,
    saveText: PropTypes.func.isRequired,
    attrs: PropTypes.object,
}

export default Textarea;