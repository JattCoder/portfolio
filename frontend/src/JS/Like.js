import React from 'react';
import { connect } from 'react-redux'
import { updateLike } from '../actions'
import '../Styles/heartbeat.css'

let Like = ({incLike, count}) => {
    return (
        <div>
            <div style={{width:'100%',background:'white'}}>
                <button style={btnstylie} ><img id='beat' className='heart' src={require('../Images/like.webp')} alt={`Liked ${count}`} onClick={()=> {incLike()}} /></button>
            </div>
        </div>
    )
}// aw creamsoda diet --- 2L water >>> snapple apple

const mapStateToProps = (state) => ({count: state.likeCount});
const mapDispatchToProps = { incLike: updateLike };
Like = connect(mapStateToProps,mapDispatchToProps)(Like);
export default Like;

const btnstylie = {
    top:0,
    marginTop:40,
    position:'fixed',
    borderRadius: '50%',
    height: 50,
    width: 50,
    backgroundColor: 'transparent',
    outline: 'none',
    zIndex: 10
}

const mouseEnter = {
    backgroundColor: 'red'
}
