import styled from "styled-components";
import Center from "./Center";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { secondary } from "@/lib/colors";

const Bg = styled.div`
    background-image: linear-gradient(to bottom left, ${secondary}, #fff, #fff);
    color: #5542f6;
    padding: 0 0;
`;
const Title = styled.h1`    
    margin: 0;
    font-size: 3.5rem;
`;
const Desc = styled.p`
    color: #222;
    font-size: 1rem;
`;
const ColumnsWrapper = styled.div`
    min-height: 450px;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

export default function Featured({product}) {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>Meet Rumii</Title>
                            <Desc>The essential bag for the essential worker. Made for nurses, by nurses.</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/products/'+product._id} outline={1} black={1}>Read more</ButtonLink>
                                <ButtonLink href={'/products'} primary={1}>
                                    <CartIcon />
                                    Shop Rumii
                                </ButtonLink>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img 
                            src="https://rumii-admin.s3.amazonaws.com/1707535844761.png"
                            alt="" 
                        />
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
};