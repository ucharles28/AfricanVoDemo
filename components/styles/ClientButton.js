import styled from 'styled-components';

const ClientButton = styled.div`
    border-width: 2px;
    border-color: ${(props) => (props.active ? '#A259FF' : '#9CA3AF')};
    border-radius: 8px;
    width: ${({ width }) => width || '256px'};
    display: flex;
    align-items: stretch;
    margin-left: 8px;
    padding-left: 8px;
    padding-right: 8px;
    padding: 8px;
    text-align: left;

    &:hover {
        border-color: ${(props) => (props.active ? '#A259FF' : '#874ad4')};
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    &:active {
        border-color: ${(props) => (props.active ? '#A259FF' : '#874ad4')};
    }
`;

export default ClientButton;