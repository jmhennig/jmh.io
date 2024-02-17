import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from 'styled-components';

const Bg = styled.div`
    background-color: #222;
    color: #5542f6;
    padding: 0 0;
`;

export default function ProductsPage({products}) {
    console.log({products});
    return (
        <>
            <link 
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
                rel="stylesheet" 
            />
            <Header/>
            <Bg>
                <Center>
                    <Title white>All Products</Title>
                    <ProductsGrid products={products} />
                </Center>
            </Bg>  
        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    return {
        props:{
            products: JSON.parse(JSON.stringify(products)),
        }
    };
}