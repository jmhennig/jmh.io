import { primary } from '@/lib/colors';
import styled from 'styled-components';
import css from 'styled-jsx/css';

const Title = styled.h2`
    font-size: 2.5rem;
    margin: 30px 20px 20px;
    font-weight: 600;
    padding-bottom: 15px;
    ${props => props.white && css`
        color: #fff;
        text-shadow: 3px 2px 0 ${primary};
        border-bottom: solid 2px #fff;
    `}
    ${props => props.black && css`
        font-weight: 500;
        color: #222;
        border-bottom: solid 2px ${primary};
    `}
`;

export default Title;
