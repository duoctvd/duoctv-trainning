import Image from "next/image";
import styled from 'styled-components';

export default function Footer() {
    const Footer = styled.footer`
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          margin-left: 2rem;
        }

        & a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & .logo {
          height: 1em;
        }
    `;

    return (
        <>
        <Footer>
            <a  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank"
            rel="noopener noreferrer"
            >
            React
            <Image src="/vercel.svg" alt="Picture of the product" width={100} height={100}/>
            </a>
        </Footer>

        </>

    );
}