import React, {Component} from 'react'
import BtnTimer from "../BtnTimer/BtnTimer";
import {addComment} from "../../Redmine/api";


class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // isForm: false,
            // time: '',
            btnSubmit: false
        };
    }

    // updateForm = (value, time) => {
    //     this.setState({ isForm: value, time: time })
    // };

    render() {
        const task = this.props.task;
        return (
            <div className="exercise__row">
                <div className="exercise__information">
                    <div className="exercise__block">
                        <div className="exercise__date">{task.id}</div>
                        <div className="exercise__project">{task.project.name}</div>
                    </div>
                    <div className="exercise__target">{task.subject}</div>
                    {<BtnTimer timeTask={task.spent_hours} updateForm={this.updateForm}/>}
                </div>
                <form className="exercise__form" hidden={!task.isForm} onSubmit={this.onChangeForm.bind(this)}>
                    <textarea className="exercise__comment" onChange={this.onTextForm.bind(this)}/>
                    <button type="submit" className={this.state.btnSubmit ? 'button button__success exercise__button btn-submit' : 'button button__success exercise__button'}  >
                        <svg className="icon icon-check">
                            <use xlinkHref="#icon-check"></use>
                        </svg>
                    </button>
                </form>
            </div>
        )
    }

    onClickForm = (task, event) => {
        this.setState({isForm: !this.state.isForm})
    };

    onTextForm = (event) => {
        this.setState({formText: event.target.value})
        console.log();
    };

    onChangeForm = (task, time, event) => {
        event.preventDefault();
        addComment(this.state.formText, task, time);
        this.setState({btnSubmit: true});
        setTimeout(()=>{this.setState({isForm: !this.state.isForm, btnSubmit: false})}, 1000);
    }
}


export default TaskList