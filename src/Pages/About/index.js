import React from 'react';
import { Card, Content, Column, Media, Image, Title, Tag} from 'rbx';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardMain from '../../components/CardMain';

import ConsistecImg from '../../assets/consistec.png';
import TradeImg from '../../assets/logo-tradework.png';

import './styles.css';


function About() {
  return (
    <div>


      <Header />
      
      <Column.Group className="columns">
        <CardMain />

        <Column size={7}>
          <Card className='card'>
            <Card.Header>
              <Card.Header.Title>Sobre mim</Card.Header.Title>
            </Card.Header>
            <Card.Content>
              <Content>
                <p>Sou Victor Hugo Fuly atualmente moro no Brasil, São Paulo. Sou um amante
                de tecnologia principalmente web e mobile. As tecnologias que estudo e faço
                meus projetos são Javascript, React, NodeJS e React Native No meu tempo livre
      gosto de estudar, jogar basquete, ouvir música e tocar bateria.</p>
              </Content>
            </Card.Content>
          </Card>
          <Card className='card'>
            <Card.Header>
              <Card.Header.Title>Experiências</Card.Header.Title>
            </Card.Header>
            <Card.Content>
              <Media>
              <Media.Item as="figure" align="left">
                <Image.Container as="p" size={96}>
                  <Image
                    alt="Consistec"
                    src={ConsistecImg}
                  />
                </Image.Container>
              </Media.Item>
              <Media.Item align="content">
                <Content>
                  <Title size={5}>Auxiliar de laboratório <Tag color='dark'>Consistec</Tag></Title>
                  <p>Desenvolvimento de planilhas com Visual Basic</p>
                  <p>Elaboração de aplicativos em Electron (javascript) para melhorar a produtividade </p>
                  <p> Calibração de peças e orçamentos</p>
                </Content>
              </ Media.Item>
              </Media>
            
              <Media>
              <Media.Item as="figure" align="left">
                <Image.Container as="p" size={96}>
                  <Image
                    alt="Tradework"
                    src={TradeImg}
                  />
                </Image.Container>
              </Media.Item>
              <Media.Item align="content">
                <Content>
                  <Title size={5}>Vendedor técnico <Tag color='dark'>Tradework</Tag></Title>
                  <p>Elaboração de cotação e resolução de dúvidas aos clientes para produtos como: 
                    Servidores, Storages, Softwares, Switches, Roteadores, Notebooks. Nobreaks e outros.</p>
                  <p> Configuração de servidores e fechamento de vendas</p>
                </Content>
              </ Media.Item>
              </Media>
            </Card.Content>
          </Card>
          <Card className='card'>
            <Card.Header>
              <Card.Header.Title>Formação</Card.Header.Title>
            </Card.Header>
            <Card.Content>
              <Content>
                <Title size={5}>OneBitCode - Desenvolvedor Full Stack Javascript</Title>
                <p>React, NodeJs , CSS, HTML, MongoDB e JavaScript</p>
              </Content>
              <Content>
                <Title size={5}>ETEC de São Paulo - Técnico em Eletrônica</Title>
                <p>Instalação e a manutenção de equipamentos e sistemas eletrônicos. 
                  Programação de embarcados.</p>
              </Content>
              <Content>
                <Title size={5}>Instituto Federal Fluminense (IFF) - Técnico em Informática</Title>
                <p>lógica de programação, desemvolvimento de software, redes e Manutenção de computadores</p>
              </Content>
            </Card.Content>
          </Card>
        </Column>
      </Column.Group>
      <Footer />

    </div>
  );
}
export default About;