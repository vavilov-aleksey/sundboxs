import React, {Component} from 'react';
import './Home.css'
import TaskList from "../../Component/TaskList/TaskList";
import {createTasks, timeEntries} from "../../Redmine/api";
import DialTimer from "../../Component/DialTimer/DialTimer";
import {connect} from 'react-redux'
import {tasks} from '../../action/tasks'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnPlay: true,
            // Day: {
            //     date: this.props.data.currentTime.dateReverse,
            //     time: this.props.data.currentTime.currentTime
            // },
            // tasks: [],
            // date: this.props.data.currentTime.date
        };
    }

    componentDidMount() {

        // this.props.fetchTasks();

        // createTasks().then(data => {
        //         const tasks = data.data;
        //         this.setState(
        //             {
        //                 tasks: tasks.issues.map(task => {
        //                     return (
        //                         {list: task, isForm: false}
        //                     )
        //                 })
        //             }
        //         )
        //     }
        // );

        // const date = this.state.date;
        //
        // const timeTasks = (arrTasks) => {
        //     const arr = arrTasks.map(item => item.hours);
        //     const number = arr.reduce((sum, current) => {
        //         return (sum + current)
        //     }, 0).toFixed(2);
        //     const numberString = String(number);
        //     return numberString;
        // };

        // timeEntries(date)
        //     .then(data => {
        //             const timeDay = data.data.time_entries;
        //             this.setState({Day: {date: this.state.Day.date, time: timeTasks(timeDay)}});
        //         }
        //     );
    }


    render() {
        const {tasksLoading, tasksList} = this.props.tasks;
        const tasks = tasksList.tasks ? tasksList.tasks : [];

        return (
            <section className="exercise">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-last order-lg-first">
                            {tasksLoading ?
                                <h2>Loading...</h2>
                             :
                                tasks.map((task, i) => {
                                        return (
                                            <TaskList task={task} key={i}/>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="col-lg-3">
                            <div className="diagram-wrapper">
                                {/*<DialTimer dates={this.state.Day} dataType={'За этот день'} dataIcon={true}/>*/}
                                {/*<DialTimer  dataType={'За этот день'} dataIcon={true}/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => (
    {
        // fetchTasks: () => dispatch(tasks())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);