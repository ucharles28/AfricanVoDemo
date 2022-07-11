import styled from 'styled-components';

const Disabledbutton = styled.button`
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: #9CA3AF;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    wrap: nowrap;
    transition: all 150ms ease-in-out;
    background-color: ${({ bg }) => bg || '#A259FF'};
    color: ${({ color }) => color || '#9CA3AF'};
    width: ${({ width }) => width || 'auto'};

    &:hover {
        background-color: #874AD4;
        color: #FFFFFF;
        border-color: #9CA3AF;
    }
`;

export default Disabledbutton;