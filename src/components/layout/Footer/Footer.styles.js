import styled from "styled-components";
import phoneIcon from '../../../assets/images/phone.svg';
import whatsappIcon from '../../../assets/images/whatsapp.svg';
import { COLORS, DATA } from "../../../constants";

export const StyledWrapper = styled.div`
    background-color: ${COLORS.primary};
    padding: 1.5rem 1rem;
    color: #fff;

    &.hide {
        padding: 0.5rem;
        visibility: hidden;
        pointer-events: none;
    }
    
    a {
        display: inline-block;
    }
    
    @media only screen and (min-width: 1024px) {
        padding: 1.5rem 10%;
    }
`;

export const StyledFooterLogo = styled.button`
    display: inline-block;
    height: 2.5rem;
    width: 5rem;
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
`;

export const StyledFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const StyledLeftContainer = styled.div``;

export const StyledFooterTitle = styled.h6`
    font-size: 1.5rem;
    margin: 0;
`;

export const StyledFooterDesc = styled.p`
    font-size: 0.75rem;
    margin: 0;
    margin-top: 0.5rem;
    white-space: pre;
`;

export const StyledRightContainer = styled.div``;

const StyledIcon = styled.a`
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
    cursor: pointer;
`;

export const StyledFooterPhone = styled(StyledIcon).attrs({
    href: "tel:+91" + DATA.phone
})`
    margin-right: 1rem;
    background-image: url(${phoneIcon});
`;

export const StyledFooterWhatsapp = styled(StyledIcon).attrs({
    href: DATA.whatsappLink + DATA.phone,
    rel: "noopener noreferrer",
    target: "_blank"
})`
    background-image: url(${whatsappIcon});
`;

