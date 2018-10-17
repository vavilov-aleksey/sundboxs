export function statisticsDay(state = '', action) {
    switch (action.type) {
        case 'STATISTICS_DAY':
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