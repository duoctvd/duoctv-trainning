import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
interface Props {
  id: string;
  name: string;
  photo: string;
  description: string;
  bgrColor: string;
}

export default function Product(props: Props) {
  return (
    <Container>
      <Link href={`/article/${props.id}`} passHref>
        <ProductName>{props.name} &rarr; </ProductName>
      </Link>
      <Image
        src={`/images/${props.photo}`}
        alt="Picture of the product1"
        width={200}
        height={200}
      />
      <Description>
      {props.description}
      </Description>
    </Container>
  );
}

const Container = styled.div`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const ProductName = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.8rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;
