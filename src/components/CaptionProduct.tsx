import styled from "styled-components";
import { News } from "src/models/news";

export default function CaptionProduct({ news }: { news: News }) {
  return (
    <Container>
      <Productname>{news.title}</Productname>
      <Description>{news.description}</Description>
    </Container>
  );
}

const Container = styled.div``;

const Productname = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Description = styled.p``;
