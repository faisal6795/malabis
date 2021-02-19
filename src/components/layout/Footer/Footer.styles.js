import styled from "styled-components";
import phoneIcon from '../../../assets/images/phone.svg';
import whatsappIcon from '../../../assets/images/whatsapp.svg';
import { COLORS, DATA } from "../../../constants";

export const StyledWrapper = styled.div`
    background-color: ${COLORS.primary};
    padding: 1.5rem 1rem;
    color: #fff;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

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

export const StyledFooterLogo = styled.img`
    display: inline-block;
    vertical-align: middle;
    height: 5rem;
    width: auto;
`;

export const StyledLogoContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    text-transform: uppercase;
    color: #fff;
`;

export const StyledLogoTitle = styled.span`
    display: block;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.5rem;
`;

export const StyledLogoSubtitle = styled.span`
    display: block;
    font-size: 0.75rem;
    letter-spacing: 5px;
    margin-top: -0.125rem;
`;

export const StyledFooterDesc = styled.p`
    font-size: 0.875rem;
    margin: 0;
    margin-top: 2rem;
    width: 100%;
    text-align: center;

    & + p {
        margin-top: 0.75rem;
    }
`;

export const StyledFooterContainer = styled.div``;

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
`;

export const StyledFooterPhone = styled(StyledIcon).attrs({
    href: "tel:+91" + DATA.phone,
    title: 'Phone'
})`
    margin-right: 1rem;
    background-image: url(${phoneIcon});
`;

export const StyledFooterWhatsapp = styled(StyledIcon).attrs({
    href: DATA.whatsappLink + DATA.phone,
    title: 'Whatsapp',
    rel: "noopener noreferrer",
    target: "_blank"
})`
    background-image: url(${whatsappIcon});
`;

