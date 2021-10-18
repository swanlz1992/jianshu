import React, { Component } from "react";
import { Redirect } from "react-router";
import {connect} from 'react-redux';
class Write extends Component {
  render() {
    const {loginStatus} = this.props;
    console.log();
    if(loginStatus){
      return (
        <div>写文章页面</div>
      );    
    }else {
        return <Redirect to='/login'/>
    }
    

}}
const mapState = (state) => ({
  loginStatus:state.getIn(['login','login'])
})
export default connect(mapState,null)(Write);
