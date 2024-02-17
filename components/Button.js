import { highlight, primary, primary_darker } from "@/lib/colors";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
    background-color: #ababab;
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    display: inline-flex;
    gap: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400 !important;
    cursor: pointer;
    svg{
        height: 20px;
        margin-top: 2px;
    }
    // Block
    ${props => props.block && css`
        display: block;
        width: 100%;
    `}
    // Black
    ${props => props.black && !props.outline && css`
        background-color: #222;
        color: #fff;
        &:hover{
            background-color: transparent;
            color: #222;
            transition: 0.2s ease;
        }
    `}
    ${props => props.black && props.outline && css`
        background-color: transparent;
        color: #222;
        border: 2px solid #222;
        &:hover{
            background-color: #222;
            color: #fff;
            transition: 0.2s ease;
        }
    `}
    // Primary
    ${props => props.primary && !props.outline && css`
        background-color: ${primary};
        color: #fff;
        border: 2px solid ${primary};
        &:hover{
            background-color: ${primary_darker};
            transition: 0.2s ease;
        }
    `}
    // Primary & Outline
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        color: ${primary};
        border: 2px solid ${primary};
        transition: 0.2s ease;
        &:hover{
            background-color: ${primary};
            color: ${highlight};
            
        }
    `}
    // Large
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
        svg{
            height: 20px;
        }
    `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function Button({children,...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}