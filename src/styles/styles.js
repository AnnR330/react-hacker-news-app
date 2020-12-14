import styled from 'styled-components'
import {
    colors
} from './colorsPalette'


export const Title = styled.h1 `
    color: ${() => colors.accent};
    text-align: center;
    font-weight: 600;
    font-size: 32px;
`;

export const ListContainer = styled.div `
    margin: 40px;
    text-align: center;
`;

export const Button = styled.button `
    padding: 15px 25px;
    background-color: transparent;
    border: 2px solid ${() => colors.accent};
    border-radius: 20px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.5s ease;
    color: ${() => colors.accent};

    &:hover{
        color: ${() => colors.background};
        background-color: ${() => colors.accent};
    }
`;

export const Item = styled.div `
    padding: 14px 0;
    margin: 0 auto;
    border-bottom: 1px solid ${() => colors.accent};
    max-width: 80%;
`;

export const LinkTitle = styled.h3 `
    color: ${() => colors.title};
    margin: 20px 0;
    font-weight: 600;
    font-size: 24px;
    transition: all 0.5s ease;

    &:hover{
        color: ${() => colors.accent};
    }
`;

export const ItemTitle = styled.h3 `
    color: ${() => colors.title};
    margin: 20px 0;
    font-weight: 600;
    font-size: 24px;
`;

export const Description = styled.div `
    color: ${() => colors.textSecondary};
    margin-bottom: 20px;
`;

export const DescriptionRow = styled.p `
    padding: 0;
    margin: 5px 0;
`;

export const DescriptionTitle = styled.b `
    color: ${() => colors.text};
`;

export const ButtonsContainer = styled.div `
    display: flex;
    justify-content: space-around;
`;

export const ItemContainer = styled.div `
    margin: 40px;
`;

export const CommentsList = styled.ul `
    margin: 40px;
`;

export const CommentItem = styled.li `
    max-width: 50%;
`;


export const CommentTitle = styled.h4 `
    font-size: 18px;
    font-style: italic;
    margin: 20px 0 0;
`;

export const CommentText = styled.p `
    font-size: 14px;
`;
export const CommentFooter = styled.p `
    font-size: 12px;
    color: ${() => colors.textSecondary };
`;

export const NestedButton = styled.button `
    padding: 15px 20px;
    background-color: transparent;
    border: 2px solid ${() => colors.accent};
    cursor: pointer;
    color: ${() => colors.accent};
`;