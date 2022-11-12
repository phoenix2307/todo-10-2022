import React, {ChangeEvent, useState} from 'react'

type AddItemFormType = {
    callback: (title:string) => void
}
export const AddItemForm = (props: AddItemFormType) => {
    const [titleItem, setTitleItem] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const addItem = () => {
        const newTitle = titleItem.trim()
        if (newTitle !== '') {
            props.callback(newTitle)
        } else {
            setError('Title must be required')
            // props.callback()
        }
        setTitleItem('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitleItem(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            addItem()
        }
    }
    return (
        <div>
            <input
                value={titleItem}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? 'error' : ''}/>
            <button onClick={addItem}>+</button>
            {error && <div className={'error-message'}>{error}</div>}

        </div>
    )
}