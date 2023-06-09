import { FC, memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { DashboardContainer, LeftButton, RightButton, ButtonContainer} from './selectionStyles'

const Selection: FC = () => {
  const navigate = useNavigate()

  const handleGoToCharacters = useCallback(() => {
    navigate('/characters')
  }, [navigate])

  const handleGoToEpisodes = useCallback(() => {
    navigate('/episodes')
  }, [navigate])

  return (
    <DashboardContainer>
      <Header />
      <VideoBackground videoSrc="/duo.mp4" />
      <ButtonContainer>
      <LeftButton onClick={handleGoToCharacters}>CHARACTERS</LeftButton>
      <RightButton onClick={handleGoToEpisodes}>EPISODES</RightButton>
</ButtonContainer>
      <Footer />
    </DashboardContainer>
  )
}

export default memo(Selection)
