import React from 'react';
import { connect } from 'react-redux'
import { updatelike } from '../actions/updatelike'
import '../Styles/heartbeat.css'

let Like = ({incLike, count}) => {
    return (
        <div>
            <div style={{width:'100%',background:'white'}}>
    <button id='like_btn' style={btnstylie} ><img id='beat' className='heart' src={require('../Images/like.webp')} alt={`Liked ${count}`} onClick={()=> {run(incLike)}} />
    {count}</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.likeCount
});
const mapDispatchToProps = { incLike: updatelike };
Like = connect(mapStateToProps,mapDispatchToProps)(Like);

let run = (incLike) => {
    incLike()
    let heart = document.getElementById('beat');
    let btn = document.getElementById('like_btn');
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                btn.style.backgroundColor = 'transparent'
                heart.style.display = ''
                heart.style.animation = 'crescendo 0.8s alternate infinite ease-in'
            },1200)
            btn.style.animation = 'btnout 4.8s'
            heart.style.animation = 'heartin 0.8s alternate ease-in'
        },1000)
        btn.style.backgroundColor = 'red'
        heart.style.display = 'none'
    },800)
    btn.style.animation = 'btnin 4.8s'
    heart.style.animation = 'heartout 0.8s alternate ease-in'
    
    //document.getElementById('like_btn').style.backgroundColor = 'red';
}

export default Like;

const btnstylie = {
    color: 'white',
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