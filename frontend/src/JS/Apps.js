import React, { Component } from 'react';
import '../Styles/apps.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SimpleImageSlider from "react-simple-image-slider";

export default class Apps extends Component {
  state={
    apps: [],
    selection: 0,
    reload: true,
    imgs: [[{url: require('../AppImgs/App1/one.jpg')}, {url: require('../AppImgs/App1/two.png')}],
    [{url: require('../AppImgs/App2/1.jpg')}, {url: require('../AppImgs/App2/2.png')}],
    [{url: require('../AppImgs/App3/1.jpg')}, {url: require('../AppImgs/App3/2.jpg')}],
    [{url: require('../AppImgs/App4/1.jpg')}, {url: require('../AppImgs/App4/2.jpg')}],
    [{url: require('../AppImgs/App5/1.jpg')}, {url: require('../AppImgs/App5/2.jpg')}]]
  }

  settings = {
    dots: true,
    infinity: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }]
  };

  getapps = async () => {
    let info = [];
    const req = await fetch('http://localhost:2021/apps');
    if(req.ok){
      info = await req.json();
      this.setState({
        apps: info
      });
    }
  }
 
  render(){
    const {apps, imgs}=this.state;
    if (!apps || !imgs) return null;
    return(
        <div height={'100%'}>
          <div className="container">
          <h6 className='heading'>Applications</h6>
          {this.state.apps.length === 0 ? (
            <div className='spinner-border' role='status'>
              <span className='sr-only' onLoad={this.getapps()} >Loading...</span>
            </div>
          ):(
            <Slider {...this.settings}>  
            {this.state.apps.length > 0 && this.state.apps.map((current,index)=>(
            <div className='out' key={current.id} style={{width:'610px'}}>
              <div className='card'>
                <h5 className='card-title'>{current.name}</h5>
                <div className='row'>
                  <div className='img'><SimpleImageSlider
                    width={210}
                    height={150}
                    images={this.state.imgs[index]}
                    showBullets={false}
                  /></div>
                  <div className='info'>
                    <ul>
                      <li>Used Ruby</li>
                      <li>Used SQL Lite</li>
                    </ul>
                  </div>
                </div>
                <div className='card-body'>
                  <small className='card-text text-sm-center text-muted'></small>
                  <br/>
                  <button className='btn btn-sm follor btn-primary' onClick={()=>{window.open(current.source)}}>Source</button>
                  <button className='btn_live' onClick={()=>{window.open(current.live)}}>Live</button>
                </div>
              </div>
            </div>
            ))}
            </Slider>
          )}
          </div>
        </div>
    );
  }
}