import Button from '@/components/Button';
import Center from '@/components/Center';
import Header from '@/components/Header';
import ProductImages from '@/components/ProductImages';
import Title from '@/components/Title';
import WhiteBox from '@/components/WhiteBox';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import styled from 'styled-components';

const Bg = styled.div`
    background-color: #222;
    color: #5542f6;
`;
const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.0fr 1.0fr;
    gap: 25px;
    margin: 40px 10px;
`;
const StyledPrice = styled.h2`
    font-size: 1.4em;
    font-weight: 600;
    padding-left: 20px;
    color: #222;
`;
const StyledDesc = styled.p`
    color: #222;
`;


export default function ProductPage({product}){
    return (
        <>
            <Header />
            <Bg>
                <Center>
                    <ColWrapper>
                        <WhiteBox>
                            <ProductImages images={product.images}></ProductImages>
                        </WhiteBox>
                        <div>
                            <WhiteBox>
                                <Title black>{product.title}</Title>
                                <StyledPrice>${product.price}</StyledPrice>
                                <StyledDesc>
                                    The Rumii Essential Bag combines utility, comfort, 
                                    and style. Made from water-repellent polyester, this 
                                    spacey bag features a main compartment, extra zipper 
                                    pockets for phones and jewelry, an open pocket for 
                                    scissors, and external adjustable loops for your badge 
                                    and IV caps. The Essential Bag is made for nurses by nurses.
                                </StyledDesc>
                                <Button style={{padding: '10px 0px'}}primary block>Add to cart</Button>
                            </WhiteBox>
                        </div>
                    </ColWrapper>
                    
                </Center>
            </Bg>
        </>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}