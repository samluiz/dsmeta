import React from 'react';
import NotificationButton from '../../atoms/NotificationButton/index';
import TableSkeleton from './styles';

const Table: React.FC = () => {
    return (
        <TableSkeleton>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Vendedor</th>
                    <th>Visitas</th>
                    <th>Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#341</td>
                    <td>28/06/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                        <span>
                            <NotificationButton />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>#341</td>
                    <td>28/06/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                        <span>
                            <NotificationButton />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>#341</td>
                    <td>28/06/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                        <span>
                            <NotificationButton />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>#341</td>
                    <td>28/06/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                        <span>
                            <NotificationButton />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>#341</td>
                    <td>28/06/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                        <span>
                            <NotificationButton />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>#341</td>
                    <td>28/06/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                        <span>
                            <NotificationButton />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>#341</td>
                    <td>28/06/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                        <span>
                            <NotificationButton />
                        </span>
                    </td>
                </tr>
            </tbody>
        </TableSkeleton>
    );
};

export default Table;
