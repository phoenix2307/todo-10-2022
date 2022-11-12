import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

type EditableSpanType = {
    editedTitle: (title: string) => void
    newTitleForSpan: string
}

export const EditableSpan = (props: EditableSpanType) => {

    const [inputValue, setInputValue] = useState(props.newTitleForSpan)
    const [renderSpan, setRenderSpan] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    function onDoubleClickHandler() {
        setRenderSpan(false)
    }

    function addNewTitle() {
        if (inputValue.trim() !== '') {
        }
        props.editedTitle(inputValue)
        setRenderSpan(true)
    }

    function onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            addNewTitle()
        }
    }

    return (
        <div>
            {renderSpan
                ? <span onDoubleClick={onDoubleClickHandler}>{inputValue}</span>
                : <input value={inputValue}
                         onChange={onChangeHandler}
                         onKeyPress={onKeyPressHandler}
                         onBlur={addNewTitle}
                         autoFocus/>
            }
        </div>
    )
}