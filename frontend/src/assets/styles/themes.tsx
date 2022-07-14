import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
    border: '1px solid #102347',
    background: 'linear-gradient(180deg, #181818 0%, #102347 100%)',
    bgcolor: '#283142',
    text: '#FFFFFF',
    title: '#510094',
    input: '#1B2531;'
};

const lightTheme: DefaultTheme = {
    border: '1px solid #00a2ff',
    background: '#ffffff',
    bgcolor: '#dadada',
    text: '#000000',
    title: '#046299',
    input: '#bababa'
};

export { darkTheme, lightTheme };
