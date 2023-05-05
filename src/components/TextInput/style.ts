import styled from 'styled-components';

const TextInputContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;

  & > input {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: #fff;
    border: none;
    padding: 20px 10px 20px 24px;

    ::placeholder {
      color: #aaa;
    }
  }
`;

export default TextInputContainer;
