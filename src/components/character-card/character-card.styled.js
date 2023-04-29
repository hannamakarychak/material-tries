import { Card as MuiCard } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import styled from "styled-components";

export const Image = styled.img`
  width: 100px;
`;

export const Card = styled(MuiCard)`
  background-color: ${(props) => props.bgColor};
  height: 100%;
  padding: 8px;
`;

export const Link = styled(MuiLink)`
  text-decoration: none;
`;
