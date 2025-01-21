import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { ContactFormEmailProps } from "../lib/types";

export default function ContactFormEmail({
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head></Head>
      <Preview>Nouveau message de votre site portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Vous avez reçu le message suivant du formulaire de contact
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>L'adresse e-mail de l'expéditeur est : {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
