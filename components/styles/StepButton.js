import styled from 'styled-components';

const Stepbutton = styled.button`
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    border-weight: solid;
    text-align: center;
    color: ${(props) => (props.color)};
    background-color: ${(props) => (props.backgroundColor)};
    padding: 12px 24px;

    &:hover {
        background-color: ${(props) => (props.hoverBackgroundColor)};
        color: ${(props) => (props.hoverColor ? '#111827' : '#fff')};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

export default Stepbutton;