import styled from 'styled-components';

const Styledcheckbox = styled.div`
    border-width: 2px;
    border-style: solid;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    color: ${(props) => (props.active ? '#fff' : '#111827')};
    background-color: ${(props) => (props.active ? '#A259FF' : '#ffffff')};
    border-color: ${(props) => (props.active ? '#A259FF' : '#D1D5DB')};
    padding: 8px;
    padding-right: 12px;
    padding-left: 8px;
    font-weight: 500;
    font-size: 14px;
    margin-right: 12px;
    margin-top: 8px;

    &:hover {
        background-color: #874AD4;
        color: #ffffff;
        border-color: #A259FF;
      }

    &:active {
        background-color: #A259FF;
    }
`;

export default Styledcheckbox;