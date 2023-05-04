import styled from 'styled-components';

const ButtonContainer = styled.button`
  background: #007be9;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);

  svg {
    background: none;
    width: 20px;
    height: 20px;

    path {
      fill: #fff;
    }
  }
`;

export default ButtonContainer;
