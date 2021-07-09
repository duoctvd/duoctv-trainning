import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
  id: number;
  name: string;
  photo: string;
  bgr_color: string;
}

export default function Product(props: Props) {
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
        background: ${props.bgr_color || "blue"};

        &:hover,
        &:focus,
        &:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        & h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        & p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
    `;



    return (
        <>
        <Thing bgr_color={props.bgr_color}>
            <Link href={`/article/${props.id}`}><h3>{props.name} &rarr;</h3></Link>
            <Image src={`/images/${props.photo}`} alt="Picture of the product1" width={200} height={200}/>
            <p>This is article 1.</p>
        </Thing>
        </>
    );
}