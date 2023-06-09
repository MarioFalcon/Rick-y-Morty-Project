import styled from 'styled-components'
import DefaultButton from '../../components/Button/button'

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Container = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
  margin-left: 100px;
  margin-right: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
`

export const FavoriteIcon = styled.div`
  width: 550px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: -1;
`

export const Title = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 31px;
  margin-top: 150px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 30px;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const Button = styled(DefaultButton)`
  background-color: transparent;
  margin: 5px;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  font-size: 14px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: lime;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }
`

export const DashboardCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GifImage = styled.img`
  width: 290px;
  position: absolute;
  z-index: 8;
`
