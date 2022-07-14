import React, { useState } from 'react';
import InputField from './styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateField: React.FC = () => {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(new Date(min));
    const [maxDate, setMaxDate] = useState(new Date(max));

    return (
        <InputField>
            <DatePicker
                selected={minDate}
                onChange={(date: Date) => {
                    setMinDate(date);
                }}
                className="inputField"
                dateFormat="dd/MM/yyyy"
            />

            <DatePicker
                selected={maxDate}
                onChange={(date: Date) => {
                    setMaxDate(date);
                }}
                className="inputField"
                dateFormat="dd/MM/yyyy"
            />
        </InputField>
    );
};

export default DateField;
