import styled from 'styled-components';

const TableSkeleton = styled.table`
    display: table;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    border-collapse: collapse;

    th {
        padding: 0.625rem;
    }

    td {
        padding: 0.4rem 4.4rem 0.4rem 4.2rem;
    }

    span {
        display: grid;
        place-items: center;
    }

    td {
        border-top: 1px solid black;
        border-collapse: collapse;
    }

    tbody tr {
        :nth-child(odd) {
            background-color: ${({ theme }) => theme.input};
        }
    }
`;

export default TableSkeleton;
