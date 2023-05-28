import styled from "styled-components";
import { Button } from "../components/Button";
import { Card } from "../components/Card/Card";
import { Title } from "../components/Card/style";
import { Center } from "../components/layout/center";
import { Breakpoints } from "../themes/default";

const Col = styled.div`
  width: 505px;
  padding: 50px 65px 65px 65px;
  flex-direction: column;

  @media ${Breakpoints.sm} {
    padding: 105px 25px 0 25px;
    width: 100vw;
    height: 100vh;
  }
`;

const CustomButton = styled.div`
  @media ${Breakpoints.sm} {
    position: absolute;
    width: auto;
    bottom: 40px;
    left: 25px;
    right: 25px;
    font-size: 1em;
  }
`;

export function Thanks({ email, setPage }) {
  const handleClick = () => {
    setPage("home");
  };
  return (
    <Center>
      <Card>
        <Col style={{ position: "relative" }}>
          <img
            src="./assets/images/icon-success.svg"
            alt="success"
            width={"65px"}
            style={{ marginBottom: "30px" }}
          />
          <Title>Thanks for subscribing!</Title>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              color: "var(--Charcoal-Grey)",
              marginTop: "25px",
            }}
          >
            A confirmation email has been sent to{" "}
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 700,
                color: "var(--Charcoal-Grey)",
              }}
            >
              {email}
            </span>
            . Please open it and click the button inside to confirm your
            subscription.
          </p>
          <CustomButton>
            <Button onClick={() => handleClick()} style={{ marginTop: "40px" }}>
              Dismiss message
            </Button>
          </CustomButton>
        </Col>
      </Card>
    </Center>
  );
}
