import gsap from "gsap";
import { useState } from "react";
import styled from 'styled-components';
import { productData } from "./productData";
import ProductRow from "./ProductRow";
import Center from "../Center";
import { primary, secondary } from "@/lib/colors";

const StyledContainer = styled.div`
    background-color: #fff;
    padding: 5px 0;
`;
const Title = styled.h2`
    font-size: 2.5rem;
    margin: 30px 20px 20px;
    font-weight: 600;
    padding-bottom: 15px;
    text-shadow: 2px 1px 0 ${secondary};
`;

export default function StyleSection({products}) {
    const [hovered, setHovered] = useState(false);
    
    function handleHover() {
        setHovered(true);
        gsap.to(``, { right: '5%', duration: 0.3, ease: 'power1.inOut' });
    }

    function handleLeave() {
        setHovered(false);
        gsap.to(``, { right: '-120%', duration: 0.3, ease: 'power1.inOut'});
    }

    return (
        <>
        <StyledContainer>
            <Center>
                <Title black>Express your style</Title>
                {products.length > 0 && products.map(product => (
                    <ProductRow {...product} />
                ))}
            </Center>
        </StyledContainer>
        </>
    );
}