import React from 'react';
import { Card, Image, Media, Title, Content, Tag, Column} from 'rbx';
import ProfileImg from '../../assets/profile.jpeg';

import './styles.css';

function CardMain() {
  return (
    <Column size={3} offset={1}>
      <Card>
        <Card.Image>
          <Image.Container size="4by3">
            <Image className='profilePicture' src={ProfileImg} />
          </Image.Container>
        </Card.Image>
        <Card.Content>
          <Media>
            <Media.Item>
              <Title as="p" size={4}>
              Victor Hugo Fuly
              </Title>
              <Title as="p" subtitle size={6}>
               <Tag className='is-dark is-medium'>Javascript full stack developer </ Tag>
              </Title>
            </Media.Item>
          </Media>
          <Content>
                    <p>(11) 96251-9372</p>
                    <p>(41) 99522-4191</p>
                    <br />
                    <p>victor_hugo_fuly@hotmail.com</p>
                    <br />
                    <a href="https://www.linkedin.com/in/victor-hugo-fuly/" target="_blank" rel="noopener noreferrer"><span className="button is-dark is-outlined buttonLinkedin">Linkedin</span></a>
                    <a href="https://github.com/vhfuly" target="_blank" rel="noopener noreferrer" ><span className="button is-dark is-outlined ">Github</span></a>

          </Content>
        </Card.Content>
      </Card>
    </Column>
  );
}

export default CardMain;
