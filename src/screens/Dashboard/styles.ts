import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1; /* the container will occupy the entire screen*/
    justify-content: center; /* centerize contents to middle. (vertical)  -> middle |. | */
    align-items: center; /* will put everything in the middle of screen (horizontal)| . |*/

     /* grab theme prop that is coming from App.tsx */
    background-color: ${({theme})=> theme.colors.background};
`;

export const Title = styled.Text`
    font-family: ${({ theme })=> theme.fonts.bold};
    font-size: 24px;
    color:  ${({theme})=> theme.colors.title};

`;