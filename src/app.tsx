import React from 'react';
import { Timer } from './components/timer/timer/timer';
import { Countdown } from './components/timer/countdown/countdown';
import { AppCont } from './app.style';

export function App() {
    return (
        <AppCont>
            <Timer />
            <Countdown />
        </AppCont>
    );
}
