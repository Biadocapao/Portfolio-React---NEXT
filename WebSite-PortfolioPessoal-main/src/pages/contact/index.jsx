import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https:www.linkedin.com/in/beatriz-m-0938b2160" 
        />
        
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="Beamarques820@gmail.com" 
        />
      </Content>
    </Container>
  )
}
