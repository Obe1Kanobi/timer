import React, { useState, useEffect, useRef } from 'react';
import {
    Title,
    Sbutton,
    InpCont,
    Scont,
    SCbutton,
    Ttime,
    Sbutton1,
    Sbutton2,
    InpCont1,
    InpCont2,
    InpCont3,
    InpCont4,
} from './countdown.style';
import audio from './countdown.sound.mp3';

export const Countdown: React.FC = () => {
    const [sliderMinutes, setSliderMinutes] = useState<number>(0); //дестриктурирующее присваивание(то что у нас в скобках указано)
    const [sliderSeconds, setSliderSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // обработчик изменения значения слайдера для минут
    const handleSliderMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinutes = Math.min(parseInt(event.target.value, 10), 720);
        setSliderMinutes(newMinutes);
    };

    // обработчик изменения значения слайдера для секунд
    const handleSliderSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSeconds = Math.min(parseInt(event.target.value, 10), 60);
        setSliderSeconds(newSeconds);
    };

    // функция для преобразования секунд в нужный формат времени
    const formatTime = (minutes: number, seconds: number): string => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}:${String(
            seconds
        ).padStart(2, '0')}`;
    };

    // обработчик кнопки старт
    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    // обработчик кнопки пауза
    const handlePause = () => {
        setIsRunning(false);
    };

    // обработчик кнопки сброс
    const handleReset = () => {
        setIsRunning(false);
        setSliderMinutes(0);
        setSliderSeconds(0);
    };
    // хук useEffect отслеживает мутации кода
    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isRunning) {
            const totalSeconds = sliderMinutes * 60 + sliderSeconds;

            if (totalSeconds === 0) {
                // таймер достиг нуля, включается звук, если audioRef установлен
                if (audioRef.current) {
                    audioRef.current.play();
                }
            } else {
                intervalId = setInterval(() => {
                    if (sliderSeconds === 0) {
                        if (sliderMinutes === 0) {
                            setIsRunning(false);
                            clearInterval(intervalId);
                        } else {
                            setSliderMinutes(sliderMinutes - 1);
                            setSliderSeconds(59);
                        }
                    } else {
                        setSliderSeconds(sliderSeconds - 1);
                    }
                }, 1000);
            }
        }

        return () => clearInterval(intervalId);
    }, [isRunning, sliderMinutes, sliderSeconds]);
    // отрисовка контента на сайте
    return (
        <Scont>
            <Title>Обратный отсчёт</Title>
            <audio ref={audioRef} src={audio} autoPlay={false} preload='auto'>
                <track kind='captions' src='subtitles.vtt' srcLang='en' default />
            </audio>
            <InpCont>
                <InpCont1
                    type='range'
                    min={0}
                    max={720}
                    step={1}
                    value={sliderMinutes}
                    onChange={handleSliderMinutesChange}
                    disabled={isRunning}
                />
                <InpCont2
                    type='number'
                    min={0}
                    max={720}
                    step={30}
                    value={sliderMinutes}
                    onChange={event => {
                        const newMinutes = Math.min(parseInt(event.target.value, 10), 720);
                        setSliderMinutes(newMinutes);
                    }}
                    disabled={isRunning}
                />
                <InpCont3
                    type='range'
                    min={0}
                    max={60}
                    step={15}
                    value={sliderSeconds}
                    onChange={handleSliderSecondsChange}
                    disabled={isRunning}
                />
                <InpCont4
                    type='number'
                    min={0}
                    max={60}
                    step={1}
                    value={sliderSeconds}
                    onChange={event => {
                        let newSeconds = parseInt(event.target.value, 10);
                        let newMinutes = sliderMinutes;

                        if (newSeconds > 59) {
                            newMinutes += Math.floor(newSeconds / 60);
                            newSeconds = newSeconds % 60;
                        }

                        setSliderMinutes(newMinutes);
                        setSliderSeconds(newSeconds);
                    }}
                    disabled={isRunning}
                />
            </InpCont>
            <Ttime>{formatTime(sliderMinutes, sliderSeconds)}</Ttime>
            <SCbutton>
                <Sbutton onClick={handleStart} disabled={isRunning}>
                    <b>Старт</b>
                </Sbutton>
                <Sbutton1 onClick={handlePause} disabled={!isRunning}>
                    <b>Пауза</b>
                </Sbutton1>
                <Sbutton2 onClick={handleReset} disabled={isRunning}>
                    <b>Сброс</b>
                </Sbutton2>
            </SCbutton>
        </Scont>
    );
};

export default Countdown;
