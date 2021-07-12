import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
interface Props {
  id: number;
  name: string;
  photo: string;
  bgrColor: string;
}

export default function Product(props: Props) {
  return (
    <>
      <Thing>
        <Link href={`/article/${props.id}`}>
          <ProductName>{props.name} &rarr;</ProductName>
        </Link>
        <Image
          src={`/images/${props.photo}`}
          alt="Picture of the product1"
          width={200}
          height={200}
        />
        <Description>This is article {props.id}</Description>
      </Thing>
    </>
  );
}

const Thing = styled.div`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  background: white;
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
