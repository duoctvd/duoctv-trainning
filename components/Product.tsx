import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function Product(props) {
    const Thing = styled.div``;

    return (
        <>
        <Thing href="" className="card">
            <Link href={`/article/${props.id}`}><h3>{props.name} &rarr;</h3></Link>
            <Image src={`/images/${props.photo}`} alt="Picture of the product" width={200} height={200}/>
            <p>This is article 1.</p>
        </Thing>

        <style jsx>{`
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
        </>
    );
}