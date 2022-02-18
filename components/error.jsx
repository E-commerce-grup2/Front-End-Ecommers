import React, { useState, useEffect } from 'react'

function Error(props) {

    const [alert, setAlert] = useState('false')

    useEffect(() => {
        setAlert(props.errors)
    }, [props])

    return (
        <>
            <div className="alert bg-red-100 rounded-lg py-2 px-5 my-2 text-base text-red-700 inline-flex items-center min-w-full animate-bounce " role='alert'>
                <strong className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg></strong> {alert}
                <button type="button" className="btn-close box-content w-4 h-4 p-1 ml-auto text-red-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-red-900 hover:opacity-75 hover:no-underline" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}

export default Error