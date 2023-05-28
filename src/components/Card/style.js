import styled from "styled-components";
import { Breakpoints } from "../../themes/default";

export const Title = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 56px;
  color: var(--Dark-Slate-Grey);

  @media ${Breakpoints.sm} {
    font-size: 2.5em;
  }
`;

export const Col = styled.div`
  margin: 75px 65px 0 40px;
  width: 375px;
  // outline: dotted red 1px;

  @media ${Breakpoints.sm} {
    width: 100%;
    max-width: 100vw;
    margin: 0;
    padding: 40px 20px 35px 20px;
    order: 2;
  }
`;
export const Col2 = styled.div`
  width: 400px;
  border-radius: 20px;
  overflow: hidden;

  @media ${Breakpoints.sm} {
    width: 100%;
    max-width: 100vw;
    border-radius: 0;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 20px;
  font-family: "Roboto";
  font-weight: 400;
  color: var(--Charcoal-Grey);
`;
