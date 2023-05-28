import { useState } from "react";
import { Card } from "../components/Card/Card";
import { Input } from "../components/Card/input";
import { Title, Col, Col2, Checkbox } from "../components/Card/style";
import { Center } from "../components/layout/center";
import { Button } from "../components/Button";
import { validateEmail } from "../units/validateEmail";
export function Home({ email, setEmail, changePage, isMobile }) {
  const [hasError, err] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      err(false);
      setEmail("");
      changePage("thanks");

      return;
    } else {
      err(true);
    }
  };

  return (
    <Center>
      <form onSubmit={(e) => handleClick(e)}>
        <Card>
          <Col>
            <Title>Stay updated!</Title>
            <p
              style={{
                marginTop: isMobile ? "30px" : "25px",
                fontFamily: "Roboto",
                fontWeight: 400,
                color: "var(--Charcoal-Grey)",
                marginBottom: "30px",
              }}
            >
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <Checkbox>
              <img src="./assets/images/icon-list.svg" alt="Check" />{" "}
              Product discovery and building what matters
            </Checkbox>
            <Checkbox>
              <img src="./assets/images/icon-list.svg" alt="Check" />{" "}
              Measuring to ensure updates are a success
            </Checkbox>
            <Checkbox>
              <img src="./assets/images/icon-list.svg" alt="Check" /> And
              much more!
            </Checkbox>
            <Input
              hasError={hasError}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Button type="sumbit">Subscribe to monthly newsletter</Button>
          </Col>
          <Col2>
            <div className="desktop-image">
              <img
                src="./assets/images/illustration-sign-up-desktop.svg"
                alt="illustration-sign-up-desktop"
                style={{ width: "100%" }}
              />
            </div>

            <div className="mobile-image">
              <img
                src="./assets/images/illustration-sign-up-mobile.svg"
                alt="illustration-sign-up-desktop"
                style={{ width: "100%" }}
              />
            </div>
          </Col2>
        </Card>
      </form>
    </Center>
  );
}
