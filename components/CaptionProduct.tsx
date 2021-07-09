
import styled from 'styled-components';

interface Props {
    id: number;
    name: string;
    photo: string;
    bgr_color: string;
}
  

export default function CaptionProduct(props: Props) {
    const Productname = styled.h3`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    const Thing = styled.div`

    `;

    return (
        <>
            <Thing>
                <Productname>Article {props.id}</Productname>
                <p>
                This is article {props.id}
                </p>
            </Thing>
        </>
    )
}