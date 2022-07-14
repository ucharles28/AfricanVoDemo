import styled from 'styled-components';

const Activebutton = styled.button`
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.active ? '#A259FF' : '#9CA3AF')};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
  padding-left: 32px;
  margin-right: 12px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  wrap: nowrap;
  transition: all 150ms ease-in-out;
  background-color: ${(props) => (props.active ? '#A259FF' : '#ffffff')};
  color: ${(props) => (props.active ? '#fff' : '#9CA3AF')};
  width: ${({ width }) => width || 'auto'};

  &:hover {
    background-color: #874ad4;
    color: #ffffff;
    border-color: #874ad4;
  }
`;

export default Activebutton;
