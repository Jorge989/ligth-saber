import styled, { css } from "styled-components";

export const Form = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 80%;

  width: 100%;
  z-index: 999;

  margin-top: 60px;
  @media (max-width: 600px) {
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80%;

    width: 100%;
    z-index: 999;

    margin-top: 60px;
  }
  h1 {
    margin: 0;
  }
  .lista {
    width: 30%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    .lista {
      width: 100%;
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
      line-height: 0px;
      margin-top: -40px;
      font-size: 10px;
    }
  }
  @media (max-width: 600px) {
    .formplantes {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 5px;
      flex-direction: column;
      font-size: 10px;
    }
  }
  @media (max-width: 600px) {
    .titulo1 {
      font-size: 10px;
    }
  }
  @media (max-width: 600px) {
    .titulo2 {
      font-size: 2px;
    }
  }
  .titulo1 {
    font-size: 40px;
    font-weight: 600;
  }
  .formplantes {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .titulo {
    color: #fff;
    font-size: 18px;
  }
  .titulo2 {
    color: #ff0933;
    font-size: 22px;
  }
  h2 {
    color: #ff0933;
  }
  button {
    background-image: linear-gradient(to right, #0020c2 15%, #3499d0, #a2b2ff);
    outline: none;
    border: none;
    width: 155px;
    height: 43px;
    box-shadow: 0px 0px 10px #0020c2;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
  }
  @media (max-width: 600px) {
    button {
      background-image: linear-gradient(
        to right,
        #0020c2 15%,
        #3499d0,
        #a2b2ff
      );
      outline: none;
      border: none;
      width: 155px;
      height: 43px;
      box-shadow: 0px 0px 10px #0020c2;
      cursor: pointer;
      border-radius: 5px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      margin-top: 25px;
      letter-spacing: 3px;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    margin-right: 260px;
  }
  @media (max-width: 600px) {
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -180px;
      margin-right: -0px;
      flex-direction: column;
    }
  }

  button:hover {
    background-image: linear-gradient(to right, #001ba1 15%, #1b85bf, #91a3fc);
    box-shadow: 0px 0px 10px #0020c2;
  }
  img {
    margin-right: 45px;
    width: 500px;
  }
  @media (max-width: 600px) {
    img {
      margin-right: 10px;
      margin-top: 170px;
      width: 250px;
    }
  }
`;
