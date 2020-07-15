import React from 'react';
import {Button} from '../../components/Button'

export const HomeScreen = () => {
    const handleClick = () => {
        console.log('Me dieron click')
    }

    return (
        <>
            <Button text={'Pokemon'} action={handleClick} primary></Button>
            <Button text={'Hola'} action={handleClick}></Button>
        </>
    )
}