
export type StatePropsType = {
    age: number
    childrenCount: number
    name: string
}

type ActionType = {
    type: string
    [key: string]: any
}

export const userReducer = (state: StatePropsType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            return {...state, age: state.age + 1}
        case 'INCREMENT-CHILDRENCOUNT':
            return {...state, childrenCount: state.childrenCount + 1}
        case 'CHANGE-NAME':
            return {...state, name: 'Nika'}
        default:
            throw new Error("I don't this type");
    }
}