import React from 'react';


import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction
} from './styles';

export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>Income</Title>
                <Icon name='arrow-up-circle' />
            </Header>
            <Footer>
                <Amount>
                    $17.500,00
                </Amount>
                <LastTransaction>Last transaction in April 13th</LastTransaction>
            </Footer>
        </Container>
    );
}