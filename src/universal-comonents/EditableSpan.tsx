import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

type EditableSpanType = {
    editedTitle: (title: string) => void
    newTitleForSpan: string
}

export const EditableSpan = (props: EditableSpanType) => {

    const [inputValue, setInputValue] = useState(props.newTitleForSpan)
    const [renderSpan, setRenderSpan] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    function onDoubleClickHandler() {
        setRenderSpan(false)
    }

    function addNewTitle() {
        if (inputValue.trim() !== '') {
            props.editedTitle(inputValue)
            setRenderSpan(true)
            setError(null)
        } else {
            setError('Title must be required')
            props.editedTitle(inputValue)
        }

    }

    function onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            addNewTitle()
        }
    }

    return (
        <>
            {renderSpan
                ? <span onDoubleClick={onDoubleClickHandler}>{inputValue}</span>
                : <input value={inputValue}
                         onChange={onChangeHandler}
                         onKeyPress={onKeyPressHandler}
                         onBlur={addNewTitle}
                         autoFocus/>

            }
            {error && <div className={'error-message'}>{error}</div>}
        </>
    )
}