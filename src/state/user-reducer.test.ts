import {StatePropsType, userReducer} from "./user-reducer";

test ('user reducer should increment only age', ()=> {
    const startState: StatePropsType = {age: 42, childrenCount: 1, name: 'Alex'}
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(43)
    expect(endState.childrenCount).toBe(1)
})

test('user reducer should increment only children count', ()=> {
    const startState = {age: 42, childrenCount: 1, name: 'Alex'}
    const endState = userReducer(startState, {type: 'INCREMENT-CHILDRENCOUNT'})

    expect(endState.age).toBe(42)
    expect(endState.childrenCount).toBe(2)
    expect(endState.name).toBe('Alex')
})

test('user reducer should change only name', ()=>{
    const startState = {age: 42, childrenCount: 1, name: 'Alex'}
    const endState = userReducer(startState, {type: 'CHANGE-NAME'})

    expect(endState.name).toBe('Nika')
    expect(endState.age).toBe(42)
    expect(endState.childrenCount).toBe(1)
})