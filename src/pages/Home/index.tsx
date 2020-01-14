import React from 'react';
import { Text } from 'react-native';

import {NavigatorType} from 'react-navigation'

import { Container, Title, Button, ContentText } from './styles';

interface Props{
  navigation: any
}

export default function Home(props: Props) {

  const { navigation } = props

  const btnContatoEvent = () => {
    navigation.navigate('Contato')
  }

  return (
    <Container>
      <Title>Pagina Home</Title>
      <ContentText>
        Breve texto
      </ContentText>
      <Button onPress={() => btnContatoEvent()}>
        <Text style={{color: '#fff'}}>Ir para Contato</Text>
      </Button>
    </Container>
  );
}
