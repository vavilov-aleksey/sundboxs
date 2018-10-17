import React, {Component} from 'react';
import {connect} from 'react-redux'

const TimeTask = ({time}) => (
    <span>{parseFloat(time).toFixed(2)}</span>
);


class BtnTimer extends Component {
    constructor(props){
        super(props);
        this.state = {
            pause: true,
            stop: true,
            timePlay: false,
            time: '',
            trackTime: '',
            playPause: false
        }

    }


    onPlay = (event) => {
        event.preventDefault();
        this.setState({
            pause: !this.state.pause,
            stop: !this.state.stop,
            time: Number(this.state.time ? this.state.time : this.props.timeTask),
            timePlay: !this.state.timePlay,
            playPause: true
        });

        if(!this.state.pause){
            clearInterval(this.timer);
        } else {
            this.timer = setInterval(()=> {
                const timeLast = () => this.state.time + 0.0002777778;
                this.setState({time: timeLast(), trackTime: timeLast() - this.props.timeTask});
            },1000 );
        }

        this.props.updateForm(false);
    };

    onStop = (event) => {
        event.preventDefault();
        clearInterval(this.timer);
        if(!this.state.stop){
            this.setState({
                pause: !this.state.pause,
                stop: !this.state.stop,
                timePlay: !this.state.timePlay
            });
        }
        this.setState({playPause: !this.state.playPause});
        this.props.updateForm(true, this.state.trackTime);
    };



    render() {
        return (
            <div className="exercise__tracker">
                <div className="exercise__icons">
                    <div onClick={this.onPlay.bind(this)}>
                        <svg className={this.state.playPause ? 'icon icon-play pause' : 'icon icon-play'} hidden={!this.state.pause}>
                            <use xlinkHref="#icon-play"></use>
                        </svg>
                        <svg className="icon icon-pause" hidden={this.state.pause}>
                            <use xlinkHref="#icon-pause"></use>
                        </svg>
                    </div>
                    <div className={this.state.stop ? 'disabled' : ''} onClick={this.state.stop ? ()=>{} : this.onStop.bind(this)}>
                        <svg className='icon icon-stop'>
                            <use xlinkHref="#icon-stop"></use>
                        </svg>
                    </div>
                </div>
                <span className={!this.state.timePlay ? 'exercise__time disabled' : 'exercise__time'} onClick={this.onStop.bind(this)}>
                        <TimeTask time={this.state.time ? this.state.time : this.props.timeTask}/>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state
});

export default connect(mapStateToProps)(BtnTimer);