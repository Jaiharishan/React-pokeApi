import React from 'react'

const Pagination = ({nextPage, prevPage}) => {
    return (
        <div className="btn">
            {prevPage && <button onClick = {prevPage}>Prev</button>}
            {nextPage && <button onClick = {nextPage}>Next</button>}
        </div>
    )
}

export default Pagination
