import React from 'react';
import { Column, Content, Image, Control, Button, Icon, Label, Textarea, Card } from 'rbx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ProfileImg from '../../assets/Javascript.png';

import './styles.css';

function Projects() {
  const sites = [
    {
      name: "Javascript Note",
      description: "Poderá criar sua conta e salvar suas notas online, podendo acessar de qualquer lugar.",
      link: "https://javascript-client-notes.herokuapp.com/"
    },
    {
      name: "Fulyflix",
      description: "Lista de alguns vídeos que amo no Youtube (Bateria, Filmes e Games). Inspirado na Netflix.",
      link: "https://fulyflix.vercel.app/"
    },
    {
      name: "Conversor de moedas",
      description: "Converte as moedas com a cotação atualizada a cada 15 minutos. (BRL, USD, CAD, EUR e JPY  ) ",
      link: "https://github.com/vhfuly/Portfolio"
    },
    {
      name: "Controle de despesas",
      description: "Um aplicativo para controle das despesas. Nele é possível colocar todas as suas transações.",
      link: "https://despesas-controle.netlify.app/"
    },
    {
      name: "Getkcal",
      description: "É uma aplicação que calcula o metabolismo basal e as calorias médias para manter, perder ou ganhar peso.",
      link: "https://getkcaloria.netlify.app/"
    },
    {
      name: "Fuly Player",
      description: "Um player de músicas personalizado, com algumas músicas a quais fiz um cover da bateria.",
      link: "https://fulyplay.netlify.app/"
    }
  ]
  return (
    <div >


      <Header />

      <Column.Group multiline className="group" >
        {sites.map(site => (
          <Column size={3}>
            <Card className='card'>
              <Card.Header>
                <Card.Header.Title>{site.name}</Card.Header.Title>
              </Card.Header>
              <Card.Content>
                <Content>
                  <p>{site.description}</p>
                  <Image className='profilePicture' src={ProfileImg} />
                  <a target="_blank" rel="noopener noreferrer" href={site.link}  > Visitar </a>
                </Content>
              </Card.Content>
            </Card>
          </Column>
        ))}
      </Column.Group>
      <Footer />

    </div >
  );
}
export default Projects;