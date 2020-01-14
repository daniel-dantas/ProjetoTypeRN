import React from 'react';
import { Text } from 'react-native';

import { Container, Title, Button, ContentText } from './styles';

interface Props{
  navigation: any
}

export default function Contato(props: Props) {

  const { navigation } = props

  const btnHomeEvent = () => {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Title>Pagina Contato</Title>
        <ContentText>
          Breve Texto
        </ContentText>
        <Button onPress={() => btnHomeEvent()}>
          <Text style={{color: '#fff'}}>Ir para a Home</Text>
        </Button>
    </Container>
  );
}
