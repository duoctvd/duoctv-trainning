import styled from "styled-components";
import CaptionProduct from "./CaptionProduct";
import Image from "next/image";
import {News} from "../../models/news";

export default function ThumnailProduct({ news }: { news: News }) {
  return (
    <Container>
      <Image
        src="/images/photo1.jpg"
        alt="Picture of the product"
        width={200}
        height={200}
      />
      <CaptionProduct news={news}/>
    </Container>
  );
}




const Container = styled.div`
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
}`;
