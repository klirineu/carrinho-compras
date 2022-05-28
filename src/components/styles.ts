import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  border-radius: 10px;
  padding: 15px 10px;
  font-size: 18px;
  font-weight: bold;
  background-color: var(--blue);
  color: var(--shape);
  &:first-child{
    margin-right: 15px;
  }
`