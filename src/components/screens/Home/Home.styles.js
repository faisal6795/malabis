import styled from "styled-components";

export const HomeWrapper = styled.div`
    padding: 1rem;
    margin-top: 3.5rem;

    .no-results {
        margin-bottom: 2rem;
        position: initial;
        padding: 0;

        a {
            display: none;
        }
    }
    
    @media only screen and (min-width: 1024px) {
        padding: 2rem 10%;
    }
`;

export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9.75rem, 1fr));
    grid-gap: 1rem;
    margin: 2rem 0 1rem;

    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
        grid-gap: 2rem;
    }
`;