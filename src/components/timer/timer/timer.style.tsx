import styled from 'styled-components';

export const Title = styled.h1`
    margin-left: 108px;
    font-size: 25px;
`; //Название таймера

export const Scont = styled.div`
    width: 300px;
    height: 260px;
    margin-left: 200px;
    border: 2px solid;
    border-radius: 10px;
`; //общий контейнер

export const SCbutton = styled.div`
    margin-left: 20px;
`; // контейнер для кнопок

export const Sbutton = styled.button`
    width: 80px;
    height: 35px;
    margin: 4px;
    background-color: white;
    border-radius: 10px;
    border: 3px solid rgba(255, 138, 0, 1);
`; //первая кнопка

export const Sbutton1 = styled.button`
    width: 80px;
    height: 35px;
    margin: 4px;
    background-color: white;
    border-radius: 10px;
    border: 3px solid rgba(107, 184, 228, 1);
`; //вторая кнопка

export const Sbutton2 = styled.button`
    width: 80px;
    height: 35px;
    margin: 4px;
    background-color: white;
    border-radius: 10px;
    border: 3px solid rgba(172, 66, 255, 1);
`; // третья кнопка

export const Ttime = styled.p`
    margin-left: 45px;
    font-size: 60px;
    margin-bottom: 55px;
    margin-top: 40px;
`; // цифры таймера
