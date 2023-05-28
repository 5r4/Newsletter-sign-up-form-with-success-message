import styled from "styled-components";
import { Breakpoints } from "../../themes/default";

export const Card = styled.div`
  background-color: var(--White);
  display: flex;
  border-radius: 30px;
  // width: 930px;
  // height: 642px;
  padding: 25px 25px 20px 25px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  @media ${Breakpoints.sm} {
    padding: 0;
    // width: 100vw;
    // height: 100vh;
    border-radius: 0;
    flex-direction: column;
  }
`;
