import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const TitleCont = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Choppers;
  font-size: 40px;
  transform-origin: 0 0;
  transform: rotate(-10deg);
`;

const TitleColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: Choppers;
  font-size: 40px;
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
  border: 1px solid black;
  display: flex;
`;

const SideBar = styled.div`
  width: 15%;
  height: 100%;
  border: 1px dotted blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
`;

const SideFoot = styled.div`
  width: 100%;
  height: 10%;
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
  width: 85%;
  height: 100%;
  border: 1px dotted red;
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

const Right = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 25px;
  height: 50px;
  width: 50px;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(2px);
    &:focus {
      outline: 0;
    }
`;

const Left = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 25px;
  height: 50px;
  width: 50px;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(-2px);
    &:focus {
      outline: 0;
    }
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
};
