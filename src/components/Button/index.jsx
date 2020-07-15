import React from 'react';
import {StyledButton} from './styles'

export const Button = ({icono,primary,text,action}) =>{
    return(
       <StyledButton onClick={action} primary={primary}>
           {text}
       </StyledButton>
    )
}