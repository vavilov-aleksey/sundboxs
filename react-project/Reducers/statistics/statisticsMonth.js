export function statisticsMonth(state = [], action) {
    switch (action.type) {
        case 'STATISTICS_MONTH':
            return {
                ...state,
                tasks: action.time.map(task => {
                    return ({
                        ...task
                    })
                })
            };
        default:
            return state;
    }
}