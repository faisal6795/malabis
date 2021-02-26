import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { StyledToggleWrapper, StyledToggleInput, StyledToggleLabel, StyledToggleText } from './ToggleBtn.styles';

const id = uuidv4();

function ToggleBtn({ leftText, rightText, isChecked, changeEvent, customClass }) {
    return <StyledToggleWrapper>
        <StyledToggleText>{leftText}</StyledToggleText>
        <StyledToggleInput id={id} onChange={changeEvent} className={customClass} checked={isChecked} />
        <StyledToggleLabel htmlFor={id}></StyledToggleLabel>
        <StyledToggleText>{rightText}</StyledToggleText>
    </StyledToggleWrapper>
}

ToggleBtn.propTypes = {
    leftText: PropTypes.string.isRequired,
    rightText: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    changeEvent: PropTypes.func.isRequired,
    customClass: PropTypes.string,
}

export default ToggleBtn;