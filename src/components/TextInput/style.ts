import styled from 'styled-components';

const TextInputContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;

  &:focus-within {
    .xmark-btn {
      display: block;
    }
  }

  .xmark-btn {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 75px;
    background: none;
    cursor: pointer;
    display: none;

    path {
      fill: #ccc;
    }
  }

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
