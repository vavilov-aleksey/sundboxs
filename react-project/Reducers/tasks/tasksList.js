export function tasksList(state = {}, action) {
    switch (action.type) {
        case 'TASKS_LIST':
            return {
                ...state,
                tasks: action.issues.issues.map(task => {
                    return(
                        {...task,
                            isForm: false,
                            play: true,
                            pause: false,
                            stop: false
                        }
                    )
                }),
                totalCount: action.issues.total_count
            };
        default:
            return state;
    }
}