import React from 'react';
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
const Pagination = ({nextPage, prevPage}) => {
    return (
        <div className="d-flex justify-content-center mb-5">
            {prevPage && <Button style={{width: 'fit-content'}} className ='mx-2' onClick = {prevPage}> <FaArrowLeft className='mx-1' /> Prev  </Button>}
            {nextPage && <Button style={{width: 'fit-content'}} className ='mx-2' onClick = {nextPage}> Next <FaArrowRight className='mx-1' /> </Button>}
        </div>
    )
}

export default Pagination
