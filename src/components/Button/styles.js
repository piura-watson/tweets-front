import styled,{css} from 'styled-components';

export const StyledButton = styled.button`
    
    border:0px solid black;
    margin:10px;
    padding:10px 30px;
    border-radius:20px;
    color:white;
    font-size:16px;
    background-color:#366D4B;
    font-weight:600;
    box-shadow:1px 1px 3px rgba(0,0,0,0.3);
    min-width:150px;
    &:hover{
        box-shadow:1px 1px 3px rgba(23,22,102,0.3);
    }
    &:focus {
        outline:0;
    }
   ${props =>
    props.primary &&
    css`
      background-color:#285E61;
    `};

`