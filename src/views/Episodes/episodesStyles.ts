import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    
  }
`
export const DashboardContent = styled.div`
  width: 33vh;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`
export const DashboardCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const Button = styled.button`
  position: fixed;
  top: 110px;
  left: 20px;
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  min-width: 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #3f51b5;
    text-decoration: underline;
    text-shadow: 0px 0px 10px #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 10px;
    margin-right: 0;
    min-width: 70px;
    padding: 8px 16px;
    font-size: 8px;
    left: 6px;
    top: 95px;
  }
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
