import React from 'react';
import Title from '../../atoms/Title';
import SearchContainer from '../SearchContainer';
import Table from '../Table';
import Container from './styles';

const SalesContainer: React.FC = () => {
    return (
        <>
            <Container>
                <Title />
                <SearchContainer />
                <Table />
            </Container>
        </>
    );
};

export default SalesContainer;
