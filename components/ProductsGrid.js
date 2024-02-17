import styled from 'styled-components';
import ProductCard from './ProductCard';

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding: 25px 20px;
`;

export default function ProductsGrid({products}) {
    return(
        <StyledProductsGrid>
            {products?.length > 0 && products.map(product => (
                <ProductCard {...product} />
            ))}
        </StyledProductsGrid>
    );
}