import {
  Main, ButtonContainer, Button
} from '../styles/Home'

const Home = () => {

  return(
    <>
      <Main>
        <ButtonContainer>
          <Button>Iniciar Sesión</Button>
          <Button>Registrate</Button>
        </ButtonContainer>
      </Main>
      <ShowInvitations />
      <LearnHowTo />
    </>
  )
}

export default Home