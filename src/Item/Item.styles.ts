import styled from "styled-components";

export const Wrapper = styled.div`

 display: flex;
 justify-content: space-between;
 flex-direction: column;
 border: 1px solid lightblue;
 border-radius: 20px;
 height: 100%;
 
 
 button {
    border-radius: 0 0 20px 20px;
 }

 img {
    
    max-height: 220px;
    object-fit: contain;
    margin-top: 10px;

 }

 div {
    font-family:  Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
 }


`;