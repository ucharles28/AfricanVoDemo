import styled from 'styled-components';

const Activebutton = styled.button`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.active ? '#A259FF' : '#9CA3AF')};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 4px;
  padding-left: 28px;
  padding-right: 28px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease-in-out;
  background-color: ${(props) => (props.active ? '#A259FF' : '#ffffff')};
  color: ${(props) => (props.active ? '#fff' : '#9CA3AF')};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  font-size: ${({ fontSize }) => fontSize || '14px'};

  &:hover {
    background-color: #874ad4;
    color: #ffffff;
    border-color: #874ad4;
  }
`;

export default Activebutton;
