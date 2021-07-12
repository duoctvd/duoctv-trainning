import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <FooterPart>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          passHref={true}
        >
          <StyledLink>
            React
            <Image
              src="/vercel.svg"
              alt="Picture of the product"
              width={100}
              height={100}
            />
          </StyledLink>
        </Link>
      </FooterPart>
    </>
  );
}

const FooterPart = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 2rem;
  }
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
