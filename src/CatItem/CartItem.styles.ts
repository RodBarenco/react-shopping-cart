import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  Button {
    background-color: lightblue;
    color: salmon;
  }


  .information, .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: scale-down;
    margin-left: 40px;
  }
`;
