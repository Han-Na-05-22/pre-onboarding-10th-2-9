import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px 0px;
  position: relative;

  .test {
    border: 2px solid red;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const SearchForm = styled.form`
  width: 490px;
  height: 75px;
  top: 30%;
  position: relative;
  border-radius: 50px;
`;
