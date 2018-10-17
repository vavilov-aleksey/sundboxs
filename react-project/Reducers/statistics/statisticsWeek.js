export function statisticsWeek(state = '', action) {
    switch (action.type) {
        case 'STATISTICS_WEEK':
            return {
                ...state,
                tasks: action.time.map(task => {
                    // console.log(task);
                    return ({
                        ...task
                    })
                })
            };
        default:
            return state;
    }
}