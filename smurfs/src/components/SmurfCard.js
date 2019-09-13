import React from 'react';
import { Card } from 'semantic-ui-react'

const Smurf = (props) => {
    return (
        <Card>
            <Card.Content>
            <Card.Header>Name: {props.item.name}</Card.Header>
            <Card.Description>Age: {props.item.age} years, Height: {props.item.height}</Card.Description>
            <button onClick={() => props.deleteBlock(props.item.id)}>Delete</button>
            </Card.Content>
        </Card>
    )
}

export default Smurf;