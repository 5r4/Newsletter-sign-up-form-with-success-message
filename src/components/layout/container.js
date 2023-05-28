import styled from "styled-components";
import { Breakpoints } from "../../themes/default";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;

  @media ${Breakpoints.sm} {
    max-width: 540px;
  }
  @media ${Breakpoints.md} {
    max-width: 720px;
  }

  @media ${Breakpoints.lg} {
    max-width: 960px;
  }
  @media ${Breakpoints.xl} {
    max-width: 1140px;
  }
`;
