import React from 'react';
import { Column, Field, Input, Control, Button, Icon, Label, Textarea, Card } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardMain from '../../components/CardMain';



function Contact() {
  return (
    <div >


      <Header />
     
      <Column.Group>
        <CardMain />

        <Column size={7}>
          <Card>
          <Card.Header>
              <Card.Header.Title>Contato</Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <form action="https://formspree.io/xbjavogg" method="POST">
          <Field >
            
              <Label>Email :</Label>

            
              <Control iconLeft iconRight>
                <Input type="email" name="email" placeholder="Email" required />
                <Icon size="small" align="left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Icon>
                <Icon size="small" align="right">
                  <FontAwesomeIcon icon={faCheck} />
                </Icon>
              </Control>
            
          </Field>
          <Field>
          <Label>Nome : </Label>
          <Control>
            <Input type="text" name="username" placeholder="Qual seu nome ?" required />
          </Control>
        </Field>
        <Field >
          
          
              <Control>
                <Textarea name="message" placeholder="Digite sua mensagem !!" />
              </Control>
           
        </Field>
        <Field>
          <Control>
            <Button className="is-dark is-outlined " type="submit">Enviar</Button>
          </Control>
        </Field>
        </form>
        </Card.Content>
        </Card>
        </Column>
      </Column.Group>
    <Footer />

    </div >
  );
}
export default Contact;