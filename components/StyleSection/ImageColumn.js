import { useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '../../public/Arrow.svg';

const StyledColumn = styled.div`
    flex-basis: 38%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
`;
const StyledImage = styled.img`
    position: relative;
    width: 30vw;
    height: auto;
    padding: 0;
    right: -110%;
    transition: right 0.3s ease-in-out;
    z-index: 2;
`;
const StyledArrow = styled(Image)`

`;

export default function ImageColumn({image}) {

    return (
        <StyledColumn>
            <StyledImage src={image} alt="" />
            <StyledArrow src={arrow} />
        </StyledColumn>
    );

}