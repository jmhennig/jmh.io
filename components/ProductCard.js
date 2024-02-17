import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import PlusIcon from "./icons/PlusIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
    transition: 0.3s ease-in-out;
    &:hover {
        transform: translate(0,-10px);
        box-shadow: 10px 0px 30px black;
    }
`;

const WhiteCard = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 210px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 4px 4px 0px 0px;
    img{
        max-width: 100%;
        max-height: 250px;
    }
`;
const Title = styled(Link)`
    font-size: 1rem;
    color: inherit;
    text-decoration: none;
    margin: 0;
    color: #222;
    font-weight: 400;
`;
const ProductInfoBox = styled.div`
    padding: 10px;
    background-color: #eae8fb;
    border-radius: 0px 0px 4px 4px;
`;
const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;
const Price = styled.div`
    font-size: 1.2rem;
    color: #222;
    font-weight: 600;
`;

export default function ProductCard({_id, title, price, images}) {
    const url = '/product/'+_id;
    const {addProduct} = useContext(CartContext);

    function addToCart() {
        addProduct(_id);
    }

    return (
        <ProductWrapper>
            <WhiteCard href={url}>
                <div>
                    <img src={images[0]} alt="" />
                </div>
            </WhiteCard>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <Button 
                        primary={1}
                        outline={1}
                        onClick={addToCart}
                    >
                        Add to cart
                    </Button>
                </PriceRow>
                
            </ProductInfoBox>
        </ProductWrapper>
        
    );
}