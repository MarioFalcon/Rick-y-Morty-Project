import { FC, memo } from 'react'

import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'

import { WelcomeDiv, Title, Subtitle } from './welcomeStyles'

const Welcome: FC = () => {
  return (
    <WelcomeDiv>
      <VideoBackground videoSrc="/blue.mp4" />
      <Title>"The Ultimate Guide to Rick and Morty: Welcome!"</Title>
      <Subtitle>()</Subtitle>
      <Footer />
    </WelcomeDiv>
  )
}

export default memo(Welcome)
