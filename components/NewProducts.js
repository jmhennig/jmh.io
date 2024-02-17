import Center from "./Center";
import ProductsGrid from "./ProductsGrid";
import Title from "./Title";


export default function NewProducts({products}) {

    return (
        <Center>
            <Title white>New Arrivals</Title>
            <ProductsGrid products={products} />
        </Center>
    );
}