import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledText, StyledSideIcon } from './Button.styles';

function Button({ text, isDisable, clickEvent, imgUrl, customClass }) {
    return <StyledButton onClick={clickEvent} disabled={isDisable} className={customClass} >
        <StyledText>{text}</StyledText>
        {imgUrl && <StyledSideIcon imgUrl={imgUrl} />}
    </StyledButton>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    isDisable: PropTypes.bool,
    clickEvent: PropTypes.func.isRequired,
    imgUrl: PropTypes.string,
    customClass: PropTypes.string,
}

export default Button;