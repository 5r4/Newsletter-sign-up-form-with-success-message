import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 8px;
  font-family: "Roboto";
  font-weight: 700;
  color: var(--White);
  background-color: var(--Dark-Slate-Grey);
  border: none;
  margin-top: 25px;

  &:hover,
  &:active {
    background: linear-gradient(120deg, #ff537b, #fe5e5e, #ff693d);
    box-shadow: 0 0 47px var(--Tomato);
  }
  &:active {
    scale: 0.985;
  }
`;
