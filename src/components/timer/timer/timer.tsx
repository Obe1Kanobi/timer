import React, { Component } from 'react';
import { Title, Sbutton, Scont, SCbutton, Ttime, Sbutton1, Sbutton2 } from './timer.style';

interface TimerProps {}

interface TimerState {
    hours: number;
    minutes: number;
    seconds: number;
    isRunning: boolean;
}

export class Timer extends Component<TimerProps, TimerState> {
    private intervalId: NodeJS.Timeout | null = null;

    constructor(props: TimerProps) {
        super(props);

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            isRunning: false,
        };
    }

    startTimer = () => {
        if (!this.state.isRunning) {
            this.intervalId = setInterval(() => {
                let { hours, minutes, seconds } = this.state;
                seconds++;

                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }

                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }

                this.setState({ hours, minutes, seconds });
            }, 1000);

            this.setState({ isRunning: true });
        }
    };

    pauseTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.setState({ isRunning: false });
    };

    resetTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0,
            isRunning: false,
        });
    };

    render() {
        const { hours, minutes, seconds, isRunning } = this.state;
        return (
            <Scont>
                <Title>Таймер</Title>
                <Ttime>
                    {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:
                    {seconds.toString().padStart(2, '0')}
                </Ttime>
                <SCbutton>
                    <Sbutton onClick={this.startTimer} disabled={isRunning}>
                        <b>Запуск</b>
                    </Sbutton>
                    <Sbutton1 onClick={this.pauseTimer} disabled={!isRunning}>
                        <b>Пауза</b>
                    </Sbutton1>
                    <Sbutton2 onClick={this.resetTimer}>
                        <b>Сброс</b>
                    </Sbutton2>
                </SCbutton>
            </Scont>
        );
    }
}

export default Timer;
