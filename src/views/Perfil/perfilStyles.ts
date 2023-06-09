import styled from 'styled-components'

export const PerfilContainer = styled.div`
  transform: scale(0.8);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 500px;
  padding: 20px;
  border-radius: 28px;
  background-color: rgba(22, 22, 22, 0.8);
  margin: auto;
  margin-top: 100px;
`

export const Avatar = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  background-image: url('https://i.pinimg.com/originals/1f/20/55/1f20558bc93e0b2f73ef15ab38d626a9.gif');
  background-size: 200%;
  background-position: center;
`

export const InfoContainer = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 31px;

  font-family: 'Arial', sans-serif;
`

export const InfoItem = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 28px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 30px;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);
  text-align: center;
`

export const AdditionalContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 0px;
  margin-top: -210px;
`
export const ButtonContainer = styled.div`
  margin-top: 58px;
  margin-left: 50px;
`
export const Back = styled.button`
  position: fixed;
  top: 110px;
  left: 20px;
  z-index: 9;

  background-color: transparent;
  color: lime;
  padding: 10px 20px;
  border: lime;
  border-radius: 50px;
  cursor: pointer;
  font-size: 25px;
  transition: all 0.3s ease-in-out;
  width: 115px;

  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: lime;
    text-shadow: 0px 0px 10px #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    padding: 8px 16px;
    font-size: 14px;
  }
`

export const Container = styled.div`
  margin-top: 0px;
  margin-bottom: 150px;
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
export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`
export const Title = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 31px;
  margin-top: 70px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 30px;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`


export const DashboardCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Titlecharacters = styled.div`
  font-size: 4vw;
  margin-left: 200px;
  margin-bottom: 50px;
  margin-top: 40px;
  color: white;
  width: calc(80% - 20px);
  text-align: center;
  text-shadow: 0px 0px 8px lime;
  font-family: 'get_schwifty';
`;

export const DetailsTitle = styled.h1`
  color: #ffffff;
  font-size: 45px;
  margin-top: 70px;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);
`


export const DetailsSpecies = styled.p`
  color: #ffffff;
  font-size: 35px;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0px 0px 0px rgba(81, 185, 249, 1);
`

export const DetailsContent = styled.div`

  background-color: rgba(226, 226, 226, 0.1);
  box-shadow: 0px 0px 10px rgba(666, 666, 666, 0.4);
  justify-content: center;
  overflow-y: auto;
  overflow-y: auto;
  margin-top: 90px;
  margin-bottom: 50px;
`
