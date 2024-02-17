import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 40px;
    margin-top: 40px;
`;

const Card = styled.div`
    background-color: #fff;
    border-radius: 4px;
    padding: 30px;
`;
const ProductInfoCell = styled.td`
    padding: 15px 5px;
`;
const ProductImageBox = styled.div`
    width: 100px;
    height: 100px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    box-shadow: 0 0 5px #aaa;
    border-radius: 5px;
    margin: 10px 0;
    img{
        max-width: 85px;
        max-height: 85px;
    }
`;
const QuantityLabel = styled.span`
    padding: 0 6px;
`;
const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`;

export default function CartPage() {
    const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);
    const [products,setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [country, setCountry] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts}).then(response => {
                setProducts(response.data);
            })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    useEffect(() => {
        if (window.location.href.includes('success')) {
            setIsSuccess(true);
            clearCart();
        }
    }, []);

    function moreOfThisProduct(id) {
        addProduct(id);
    }
    function lessOfThisProduct(id) {
        removeProduct(id);
    }
    async function goToPayment() {
        const response = await axios.post('/api/checkout', {
            name,email,city,postalCode,streetAddress,country,
            cartProducts,
        });
        if (response.data.url) {
            window.location = response.data.url;
        }
    }
    
    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }

    if (isSuccess) {
        return (
            <>
                <link 
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
                    rel="stylesheet" 
                />
                <Header />
                <Center>
                    <ColumnsWrapper>
                        <Card>
                            <h1>Thanks for your order!</h1>
                            <p>We will email you when your order is shipped. <br/> <br/> Sincerely,<br/>Your friends at Rumii</p>
                        </Card>
                    </ColumnsWrapper>
                </Center>
            </>
        );
    }

    return (
        <div>
            <link 
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
                rel="stylesheet" 
            />
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Card>
                        <h2>Cart</h2>
                        
                        {!products?.length && (
                            <div>Your cart is empty.</div>
                        )}
                        
                        {products?.length > 0 && (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr>
                                            <ProductInfoCell>
                                                <ProductImageBox>
                                                    <img src={product.images[0]} alt="" />
                                                </ProductImageBox>
                                                {product.title}
                                            </ProductInfoCell>
                                            <td>
                                                <Button onClick={() => lessOfThisProduct(product._id)} black={1} outline={1}>-</Button>
                                                    <QuantityLabel>
                                                        {cartProducts.filter(id => id === product._id).length}
                                                    </QuantityLabel>
                                                <Button onClick={() => moreOfThisProduct(product._id)} black={1} outline={1}>+</Button>
                                            </td>
                                            <td>
                                                ${cartProducts.filter(id => id === product._id).length * product.price}.00
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td>TOTAL:</td>
                                        <td></td>
                                        <td>${total}.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        )}
                    </Card>
                    {!!cartProducts?.length && (
                        <Card>
                            <h2>Order information</h2>
                                <Input 
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    name="name"
                                    onChange={ev => setName(ev.target.value)} 
                                />
                                <Input 
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    name="email"
                                    onChange={ev => setEmail(ev.target.value)}
                                />
                                <CityHolder>
                                    <Input
                                        type="text"
                                        placeholder="City"
                                        value={city}
                                        name="city"
                                        onChange={ev => setCity(ev.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Postal Code"
                                        value={postalCode}
                                        name="postalCode"
                                        onChange={ev => setPostalCode(ev.target.value)}
                                    />
                                </CityHolder>
                                <Input
                                    type="text"
                                    placeholder="Street"
                                    value={streetAddress}
                                    name="streetAddress"
                                    onChange={ev => setStreetAddress(ev.target.value)}
                                />
                                <Input
                                    type="text"
                                    placeholder="Country"
                                    value={country}
                                    name="country"
                                    onChange={ev => setCountry(ev.target.value)}
                                />
                                <Button black={1} block={1} 
                                        onClick={goToPayment}>
                                Continue to payment
                                </Button>
                        </Card>
                    )}
                </ColumnsWrapper>
            </Center>
        </div>
    );
}