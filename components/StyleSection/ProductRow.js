import styled from 'styled-components';
import Link from 'next/link';
import ImageColumn from './ImageColumn';
import Image from 'next/image';
import arrow from '../../public/Arrow.svg';

const StyledRow = styled.div`
    overflow: hidden;
    display: flex;
    border-top: 3px solid var(--300, #D0D5DD);
    max-height: 225px;
    &:hover {
        img{
            right: 5%;
        }
    }
`;
const ChildrenColumn = styled.div`
    text-align: left;
    flex-basis: 25%;
    padding: 56px 0;
    color: var(--Black, #000);
    font-family: "Satoshi Variable";
    font-size: 1.5em;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`;
const NameColumn = styled.div`
    flex-basis: 33%;
    padding: 70px 0;
    color: var(--Black, #000);
    text-align: center;
    align-items: center;
`;
const Title = styled(Link)`
    text-decoration: none;
    color: #222;
    font-family: "Satoshi Variable";
    font-size: 35px;
    font-style: normal;
    font-weight: 900;
    line-height: 50px; /* 207.143% */
`;
const BackgroundComponent = styled.div`
    position: relative;
    height: 50px;
    width: 230px;
    background-color: transparent;
    border-radius: 25px;
    left: 25%;
    cursor: pointer;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: ${({ bgColor }) => {
            switch (bgColor) {
                case 'bg1':
                return '#9ABCFF';
                case 'bg2':
                return '#A7A7A7';
                case 'bg3':
                return '#FF7A00';
                case 'bg4':
                return '#9AEDFF';
                default:
                return 'transparent'; // Or your desired default hover color
            }
        }};
        
    }
`;

export default function ProductRow({productId,name,bgColor,image,children}) {    
    const url = '/product/'+productId;

    function handleHover() {
        setHovered(true);
        gsap.to(imageRef.current, { right: '5%', duration: 0.3, ease: 'power1.inOut' });
    }

    function handleLeave() {
        setHovered(false);
        gsap.to(imageRef.current, { right: '-120%', duration: 0.3, ease: 'power1.inOut'});
    }

   return (
        <StyledRow>
            <ChildrenColumn>
                {children}
            </ChildrenColumn>
            <NameColumn>
                <BackgroundComponent bgColor={bgColor}>
                    <Title href={url}>
                        {name}
                    </Title>
                </BackgroundComponent>
            </NameColumn>
            <ImageColumn image={image}/>
        </StyledRow>
   );
}