import styled, { css } from "styled-components";
export const Header1 = styled.header`
  background-image: linear-gradient(
    to right,
    #000 15%,
    rgb(0, 10, 54),
    rgb(5, 5, 5)
  );
  box-shadow: 0px 0px 20px rgb(0, 0, 0);
  width: 100%;
  height: 10%;
  position: fixed;
  top: 0;
  z-index: 999;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 20px;
    margin-left: 80px;
    margin-top: 5px;
    flex-direction: row;
    color: #fff;
    cursor: pointer;
    z-index: 999;
    position: absolute;
    a {
      color: #fff;
      cursor: pointer;
      list-style: none;
      decoration: none;
      z-index: 999;
    }
    a:hover {
      color: rgb(1, 250, 55);
    }
    li {
      color: #fff;
      cursor: pointer;
      list-style: none;
      z-index: 999;
    }
    .linkPlantes {
      cursor: pointer;
      z-index: 999;
    }
  }
  .wars {
    cursor: pointer;
    z-index: 999;
  }
  .home {
    display: none;
  }
  @media (max-width: 600px) {
    .wars {
      display: none;
    }
  }
  @media (max-width: 600px) {
    .home {
      display: flex;
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    z-index: 999;
  }
  @media (max-width: 600px) {
    ul {
      margin-left: 25px;
    }
  }
`;
