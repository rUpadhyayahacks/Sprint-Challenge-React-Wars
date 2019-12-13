import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon } from 'semantic-ui-react'

export default function StarwarsCard(props) {
    const {name, height, gender} = props;

    console.log(props)
    return (
        <Card>
    
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Height: {height}</span>
      </Card.Meta>
      
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Gender: {gender}
      </a>
    </Card.Content>
  </Card>
)
}

