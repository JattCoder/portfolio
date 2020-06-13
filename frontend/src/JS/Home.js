import React, { Component } from 'react';
import '../Styles/home.css'

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      email: '',
      linkedin: '',
      github: '',
      quote: ''
    };
  }

  componentDidMount(){
    let welcome = document.getElementById('welCome');
    welcome.innerHTML = welcome.innerHTML.replace('To', '<span style="color: red;">To</span>');
    this.getquote();
  }

  getquote = async () => {
    let info = '';
    const req = await fetch('http://localhost:2021/home');
    if(req.ok){
      info = await req.json();
      const req2 = await fetch('http://localhost:2021/quote')
      if(req2.ok){
        let info2 = await req2.json();
        this.setState({
          likes: info.likes,
          quote: info2.quote
        });
        console.log(this.state.quote)
      }
      setTimeout(() =>{
        this.getquote();
      },10000)
    }
  }
  render(){
    return(
      <div>
        <div style={{marginTop:'10%',flex:1,justifyContent: "center",alignItems: "center",height:300}}>
          <div className='header'>
            <h1 id='welCome' className='welcome'>Welcome To</h1>
            <h1 className='portfolio'>Harmandeep Mand's Portfolio</h1>
          </div>
          <h1 className='showquote'>{this.state.quote}</h1>
        </div>
      </div>
    );
  }
}