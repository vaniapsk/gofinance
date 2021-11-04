import React from 'react';
import { Feather } from '@expo/vector-icons'; //with expo , various icons library are already there
import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';


export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/43658342?v=4' }} />
                        <User>
                            <UserGreeting>Hello,</UserGreeting>
                            <UserName>Vania</UserName>
                        </User>
                    </UserInfo>
                    <Icon name='power'/>
                </UserWrapper>               
            </Header>
                        
            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>

            
        </Container>
    )
}

