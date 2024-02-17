import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";
import logo from "../public/rumiilogo.png";
import { primary } from "@/lib/colors";

const StyledHeader = styled.header`
    background-color: #222;
`;
const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: inline;
    width: 100px;

`;
const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0;
`;
const StyledNav = styled.nav`
    padding-top: 20px;
    display: flex;
    gap: 15px;
`;
const NavLink = styled(Link)`
    color: #fff;
    font-weight: 400;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
        color: ${primary};
        text-shadow: 0.5px 0.5px 0 white;
        transform: translate(-2px, -2px);
    }
`;

export default function Header() {
    const {cartProducts} = useContext(CartContext);

    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>
                        <StyledImage src={logo} alt="Rumii Logo" />
                    </Logo>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>All products</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}