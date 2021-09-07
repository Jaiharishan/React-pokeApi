import React from 'react';

const Search = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <input type='text' className='search form-control w-50' style= {{minWidth: '275px'}} id='search' placeholder='search your pokemon' />
        </div>
    )
}

export default Search
