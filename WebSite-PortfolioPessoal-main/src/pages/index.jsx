import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Beatriz Marques</Name>
        <Function>Developer Front End</Function>
        <Intro>Tenho 20 Anos. Sou Técnica de Informátics, 
          atualmente estou cursando Análise e Desenvolvimento de Sistemas, 
          tenho experiência em desenvolvimento Web
          (JS), Gestão de Projetos e adminstração de Banco de dados.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
