import styled from 'styled-components';

export const Title = styled.h1`
    margin-left: 50px;
    font-size: 25px;
`; //Название таймера

export const Scont = styled.div`
    width: 300px;
    height: 260px;
    border: 2px solid;
    border-radius: 10px;
`; //общий контейнер

export const InpCont = styled.div`
    padding-left: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`; //общий контейнер для Input

export const InpCont1 = styled.input`
    width: 130px;
    margin-left: 20px;
`; //Контейнер для ползунка 1

export const InpCont2 = styled.input`
    margin-left: 25px;
    width: 50px;
    height: 15px;
`; //Контейнер для ввода вручную 1

export const InpCont3 = styled.input`
    width: 130px;
    margin-left: 20px;
`; //Контейнер для ползунка 2

export const InpCont4 = styled.input`
    margin-left: 25px;
    width: 50px;
    height: 15px;
`; //Контейнер для ввода вручную 2

export const SCbutton = styled.div`
    margin-left: 18px;
    padding-top: 15px;
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
    margin: 0px;
    padding-left: 40px;
    padding-top: 20px;
    font-size: 60px;
`; // цифры таймера
