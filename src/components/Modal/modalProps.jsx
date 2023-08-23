export const modalProps = [
    {
        type: 'buy',
        title: "Add to basket",
        description: 'are u sure to add?',
        closeBtn: true,
        closeBtnHandler(onCloseHandler, className) {
            return (
                <button onClick={onCloseHandler} className={className} />
            )
        },
        actions(onCloseHandler, onSubmitHandler, className) {
            return (
                <div className={className}>
                    <button onClick={onSubmitHandler} className='submit'>Add</button>
                    <button onClick={onCloseHandler} className='cancel'>Cancel</button>
                </div>
            )
        },
    },
    {
        type: 'delete',
        title: "Remove from Cart",
        description: 'are u sure to remove?',
        closeBtn: false,
        closeBtnHandler(onCloseHandler, className) {
            return (
                <button onClick={onCloseHandler} className={className} />
            )
        },
        actions(onCloseHandler, onSubmitHandler, className) {
            return (
                <div className={className}>
                    <button onClick={onSubmitHandler} className='submit'>Delete</button>
                    <button onClick={onCloseHandler} className='cancel'>Cancel</button>
                </div>
            )
        },
    }
]
