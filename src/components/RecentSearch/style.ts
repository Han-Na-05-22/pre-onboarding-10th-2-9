import styled from 'styled-components';

const RecentSearchContainer = styled.div`
  width: 490px;
  background: #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 30%;

  .top-box,
  .bottom-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
    padding: 30px 25px;

    strong {
      color: #777;
    }

    .my-search-data {
      color: #000;
      font-weight: bold;
    }

    p {
      color: #aaa;
    }
  }

  .top-box {
    border-bottom: 1.5px solid #ddd;
  }

  .bottom-box {
    ul {
      display: flex;
      gap: 0px 15px;

      li {
        cursor: pointer;

        span {
          padding: 12.5px;
          border-radius: 20px;
          background: #cae9ff;
          display: inline-block;
          color: #00449e;
          font-weight: 500;
        }
      }
    }
  }

  .top-box.recommend {
    flex-direction: row;
    cursor: pointer;
  }

  .recommend {
    gap: 20px 15px;

    ul {
      flex-direction: column;

      li {
        cursor: pointer;

        span {
          background: #fff;
          color: #000;
        }
      }
    }
  }

  .recommend-svg {
    width: 15px;
    height: 15px;

    path {
      fill: #aaa;
    }
  }
`;

export default RecentSearchContainer;
