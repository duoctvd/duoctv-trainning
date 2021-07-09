import styled from 'styled-components';
import CaptionProduct from './CaptionProduct';
import Image from 'next/image';


export default function ThumnailProduct() {
    const Thing = styled.div`
        display: block;
        padding: 4px;
        margin-bottom: 20px;
        line-height: 1.42857143;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
    }`;

    return (
        <>
            <Thing>
            <Image src="/images/photo1.jpg" alt="Picture of the product" width={200} height={200} />
            <CaptionProduct id="1" photo="photo1.jpg" name="Article 1"/>
            </Thing>
        </>
    )
}
