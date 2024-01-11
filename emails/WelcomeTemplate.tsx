import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        {/* <Body style={body}> */}
        <Body className="bg-white">
          <Container>
            {/* <Text style={heading}>Hello {name}</Text> */}
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://benzhub.github.io">benzhub.github.io</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "30px",
};

export default WelcomeTemplate;
