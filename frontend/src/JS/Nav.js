import React, { Component } from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import Like from './Like';

class Nav extends Component {
  state = {
    linkedin: "https://www.linkedin.com/in/harmandeep-mand-softwarelife/",
    github: "https://github.com/JattCoder",
    email: "harmandeepmand.hm@gmail.com",
    addlike: 1
  }

    render(){
      return(
        <div>
          <div>
            <TopNav/>
            <Like like={this.state.addlike}/>
            <BottomNav linkedin={this.state.linkedin} github={this.state.github} email={this.state.email}/>
          </div>
        </div>
      );
    }
}

export default Nav;