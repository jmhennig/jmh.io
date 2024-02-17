import { primary } from '@/lib/colors';
import { useState } from 'react';
import { styled } from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
`;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
        border-color: ${primary};
    ` : `
        border-color: transparent;
    `}
    
    height: 60px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
`;

export default function ProductImages({images}) {
   const [activeImage,setActiveImage] = useState(images?.[0]);

    return (
        <>
            <link 
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
                rel="stylesheet" 
            />
            <Image src={activeImage} />
            <ImageButtons>
                {images?.map(image => (
                    <ImageButton
                        key={image}
                        active={image===activeImage} 
                        onClick={() => setActiveImage(image)}>
                        <Image src={image} alt='' />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    )
}