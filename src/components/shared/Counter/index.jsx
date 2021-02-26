import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledCounterLabel, StyledCounterValue, StyledCounterWrapper, StyledDecrementBtn, StyledIncrementBtn } from './Counter.styles';

function Counter({ isRetail, changeEvent, label, presetValue, customClass }) {

    const big = 100;
    const [value, setValue] = useState(presetValue);

    useEffect(() => {
        setValue(presetValue);
    }, [presetValue]);

    function decrementEvent() {
        let temp = isRetail ? value - 1 : value - big;
        temp < 0 && (temp = 0);
        setValue(temp);
        changeEvent(temp);
    }

    function incrementEvent() {
        const temp = isRetail ? value + 1 : value + big;
        setValue(temp);
        changeEvent(temp);
    }

    return <StyledCounterWrapper className={customClass}>
        {label && <StyledCounterLabel>{label}</StyledCounterLabel>}
        <StyledDecrementBtn onClick={decrementEvent} title='Decrease' />
        <StyledCounterValue>{value}</StyledCounterValue>
        <StyledIncrementBtn onClick={incrementEvent} title='Increase' />
    </StyledCounterWrapper>
}

Counter.propTypes = {
    isRetail: PropTypes.bool.isRequired,
    changeEvent: PropTypes.func.isRequired,
    label: PropTypes.string,
    presetValue: PropTypes.number,
    customClass: PropTypes.string,
};

export default Counter;