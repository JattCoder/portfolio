import React from 'react'
import { useDispatch } from 'react-redux'
import { submitReview } from '../actions/submitReview'

let ReviewInput = () =>{
    const dispatch  = useDispatch();
    return(
        <div>
            <div>
                <textarea id="subject" name="subject" placeholder="Review..." style={inputStyle}></textarea>
            </div>
            <div>
                <button className='btn btn-sm follor btn-primary' onClick={()=>{submitHandler(dispatch)}}>Submit Review</button>
            </div>
        </div>
    )
}

let submitHandler = (dispatch) =>{
    let review = document.getElementById('subject') 
    dispatch(submitReview(review.value));
    review.value = ''
}

export default ReviewInput;

let inputStyle = {
    padding:10,
    borderRadius:'1%',
    height:'300px', 
    width:'700px', 
    color:'white', 
    background: 'transparent',
    resize: 'none'
}