import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.duv`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #222;
  padding: 1em 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
	margin: 0;
	&:hover {
		text-decoration: underline;
	}
`;

function NavBar() {
  return (
    <NavBarContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/sobre">Sobre</StyledLink>
      <StyledLink to="/produtos">Produtos</StyledLink>
      <StyledLink to="/contato">Contato</StyledLink>
    </NavBarContainer>
  );
}

export default NavBar;
