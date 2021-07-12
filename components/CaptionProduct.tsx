import styled from "styled-components";

interface Props {
  id: number;
  name: string;
  photo: string;
  bgrColor: string;
}

export default function CaptionProduct(props: Props) {
  return (
    <>
      <Thing>
        <Productname>Article {props.id}</Productname>
        <Description>This is article {props.id} detail</Description>
      </Thing>
    </>
  );
}

const Thing = styled.div``;

const Productname = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Description = styled.p``;
