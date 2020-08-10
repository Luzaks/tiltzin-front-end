import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const TitleCont = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Choppers;
  font-size: 45px;
  transform-origin: 0 0;
  transform: rotate(-10deg);
`;

const TitleColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #71706e;
  font-family: Choppers;
  font-size: 50px;
  transform-origin: 0 0;
  transform: rotate(-10deg);
`;

const Span = styled.span`
  text-decoration: underline;
`;

const Brand = styled.span`
  font-size: 7px;
`;

const Button = styled.button`
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 900;
  background-color: transparent;
  margin: 0 5px;
  padding: 3px 4px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const AuthContainer = styled.div`
  width: calc(100% + 50px);
  height: calc(100% + 49px);
  position: relative;
  left: -25px;
  top: -86px;
  background-color: rgba(255,255,255,0.5);
`;

const CircleButton = styled.button`
  border-radius: 100%;
  color: white;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border: none;
  background-color: none;
`;

const DashBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const DestinyWrap = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(220, 208, 255, 0.3);
`;

const DestinyInfo = styled.div`
  width: 100%;
  height: 50%;
  display:flex;
  flex-direction: column;
  margin: 5%;
  margin-bottom: 12px;
  color: rgba(225,225,225,0.9); 
  font-weight: 900;
  border-top: rgba(225,225,225,0.9) solid 5px;
  border-bottom: rgba(225,225,225,0.9) solid 5px;
  color: #d9d9d9;
  text-shadow: -2px -2px 2px rgba( 255, 255, 255, 0.1), 2px 2px 2px rgba( 0, 0, 0, 0.7);
  width: fit-content;
  height: fit-content;
`;

const Wrap = styled.div`
  display: flex;
  margin: 5%;
  margin-top: 0;
  width: fit-content;
  height: fit-content;
  align-items: center;
  color: rgba(225,225,225,0.9); 
  font-size: 15px;
`;

const Know = styled.button`
  font-size: 15px;
  height: 40px;
  width: 130px;
  font-weight: 900;
  color: #d9d9d9;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  background-color: transparent;
  text-shadow: -2px -2px 2px rgba( 255,255,255,0.1),2px 2px 2px rgba( 0,0,0,0.7);
  background-color: rgba(0, 0, 0, 0.18);
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  padding: 3% 6%;
  border-radius: 20px;
`;

const SideBar = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  background-color: rgba(225,225,225,0.3);
`;

const PagesConatiner = styled.div`
  width: 100%;
  height: 72.5%;
  padding-top: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

const PagesLink = styled.div`
  width: 75%;
  height: 38px;
  background-color: #59daae;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-weight: 900;
  padding-left: 14px;
  font-size: 13px;
  &:hover {
    cursor: pointer;
    background-color: #dcd0ff;
  }
`;

const SideFoot = styled.div`
  width: 100%;
  height: 12.5%;
  display: flex;
  flex-Direction: column;
  align-items: center;
  justify-content: center;
`;

const MiddleFoot = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 17px;
  height: 17px;
  margin: 0 5px;
`;

const Credits = styled.span`
  color: grey;
  font-size: 10px;
`;

const Dashy = styled.section`
  width: 80%;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;

const SliderCSS = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Right = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  right: 25px;
  height: 50px;
  width: 50px;
  justify-content: center;
  background: #59daae;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  img {
    transform: translateX(2px);
    &:focus {
      outline: 0;
    }
`;

const Left = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  left: 25px;
  height: 50px;
  width: 50px;
  justify-content: center;
  background: #59daae;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  img {
    transform: translateX(-2px);
    &:focus {
      outline: 0;
    }
`;

const DestinyCity = styled.span`
  font-size: 60px;
  display: flex;
  width: fit-content;
  width: -moz-fit-content;
`;
const DestinyState = styled.p`
  font-size: 40px;
`;

const DestinyCountry = styled.p`
  font-size: 20px;
  margin-bottom: 13px;
`;

const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftHalf = styled.div`
  width: 65%;
  height: 100%;
`;

const RightHalf = styled.div`
  width: 35%;
  height: 100%;
  background-color: rgba(225,225,225,0.3);
  padding: 7% 3% 0 0;
  letter-spacing: 0.5px;
`;

const Return = styled.button`
display: flex;
position: absolute;
top: 80%;
left: 25px;
height: 50px;
width: 50px;
justify-content: center;
background: #59daae;
border-radius: 50%;
cursor: pointer;
align-items: center;
transition: transform ease-in 0.1s;
&:hover {
  transform: scale(1.1);
}
&:active {
  transform: scale(0.9);
}
img {
  transform: translateX(-2px);
  &:focus {
    outline: 0;
  }
`;

const PresentationCity = styled.h1`
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  font-size: 38px;
  font-weight: 900;
  text-align: right;
  text-shadow: 3px 2px 3px #dcd0ff;
`;

const PresentationLocation = styled.p`
  margin: 0;
  margin-bottom: 6%;
  color: rgba(0, 0, 0, 0.7);
  font-size: 22px;
  font-weight: 900;
  text-align: right;
`;

const PresDescription = styled.div`
  font-family: MeganJune;
  float: left;
  text-align: justify;
  padding-left: 4%;
  font-size: 18px;
`;

const PresentationFamily = styled.div`
  font-family: MeganJune;
  float: left;
  text-align: left;
  padding: 0 4%;
  margin: 3% 0;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const PostTrip = styled.button`
  padding: 3% 6%;
  margin-top: 5%;
  border-radius: 20px;
  cursor: pointer;
  background-color: #59daae;
  color: white;
  font-weight: 900;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const AppCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-dirention: column;
`;

export {
  NavBar,
  Title,
  TitleColor,
  TitleCont,
  Span,
  Brand,
  Button,
  AuthContainer,
  CircleButton,
  DashBoard,
  SideBar,
  SideFoot,
  MiddleFoot,
  Dashy,
  SliderCSS,
  Right,
  Left,
  Icon,
  Credits,
  PagesConatiner,
  PagesLink,
  DestinyWrap,
  DestinyInfo,
  DestinyCity,
  DestinyState,
  DestinyCountry,
  Wrap,
  Know,
  Details,
  LeftHalf,
  RightHalf,
  Return,
  PresentationCity,
  PresentationLocation,
  PresDescription,
  PresentationFamily,
  PostTrip,
  AppCont,
};
