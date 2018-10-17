import React from 'react';
import './DialTimer.css'

const rate = (dataType, time) => {
    if (dataType &&  time) {
        switch (dataType) {
            case 'За этот день':
                return (100 - ((8 - time) / 0.08)).toFixed(0);
            case 'За эту неделю':
                return (100 - ((40 - time) / 0.4)).toFixed(0);
            case 'За этот месяц':
                return (100 - ((150 - time) / 1.5)).toFixed(0);
            default:
                return ''
        }
    }
};

const time = (date) => {
    // console.log(date);
};



const DialTimer = ({dates, dataType, dataIcon})=> (
    <React.Fragment>
            <div className="diagram">
                <svg viewBox="0 0 36 36" className="circular-chart blue">
                    <linearGradient id="linear-gradient" >
                        <stop offset="0.129978" stopColor="#99D25F"/>
                        <stop offset="0.253283" stopColor="#5BC061"/>
                        <stop offset="0.405344" stopColor="#27AE60"/>
                        <stop offset="0.490706" stopColor="#FC654A"/>
                        <stop offset="0.619627" stopColor="#F87747"/>
                        <stop offset="0.731743" stopColor="#F2994A"/>
                        <stop offset="0.843091" stopColor="#CAC745"/>
                    </linearGradient>
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    {/*<path className="circle" stroke="url(#linear-gradient)"*/}
                          {/*// strokeDasharray={rate(dataType, dates.time) + ",100"}*/}
                          {/*strokeDasharray='10, 100'*/}
                          {/*d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>*/}
                </svg>
                <div className="diagram_wrapper">
                    <div className="diagram__date">
                        {dataIcon ?
                            <svg className="icon icon-calendar">
                                <use xlinkHref="#icon-calendar"/>
                            </svg>
                            : ''}
                        <span className="diagram__interval">{dates.date}</span>
                    </div>
                    <span className="diagram__time">{time(dates)}</span>
                </div>
            </div>
        {!dataIcon ?
            <div className="diagram__percentages">
                {rate(dataType, dates.time)}%
            </div>
            : ''
        }
    </React.Fragment>
);

export default DialTimer;





