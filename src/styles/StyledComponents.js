import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
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

const Dashy = styled.section`
  width: 85%;
  height: 100%;
  border: 1px dotted red;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  
`;

export {
  NavBar,
  Title,
  TitleColor,
  Span,
  Brand,
  Button,
  AuthContainer,
  CircleButton,
  DashBoard,
  SideBar,
  Dashy,
};
