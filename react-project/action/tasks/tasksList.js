export function tasksList(issues) {
    return {
        type: 'TASKS_LIST',
        issues
    };
}
