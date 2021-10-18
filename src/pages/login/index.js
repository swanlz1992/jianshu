import React, { Component } from "react";
import { Redirect } from "react-router";
import { LoginWrapper, Middle ,Button} from "./style";
import {connect} from 'react-redux';
import {actionCreators} from './store'
class Login extends Component {
  render() {
    const {loginStatus} = this.props;
    console.log();
    if(!loginStatus){
      return (
        <LoginWrapper>
          <Middle>
            {/* 如果用 ref时报 styled-component,可以用styled-component 提供了一个 innerRef,相当于原生 ref */}
              <input type="text"  className='userName' placeholder="请输入用户名" ref={(input)=>{this.account = input }}/>
              <input type="password" className='password' placeholder="请输入密码" ref={(input)=>{this.password = input}}/>
              {/* <Button onClick={this.props.login()}>登陆</Button> */}
              <Button onClick={()=>{this.props.login(this.account,this.password)}}>登陆</Button>
          </Middle>
        </LoginWrapper>
      );    
    }else {
      return <Redirect to='/'/>
    }
    
  //   if(!login) {

  //   }else {
  //     return <Redirect to='/'/>
  //   }
  // }
}}
const mapState = (state) => ({
  loginStatus:state.getIn(['login','login'])
})
const mapDispatch = (dispatch) => ({
  login(account,password){
    dispatch(actionCreators.loginAction(account.value,password.value))
  }
})
export default connect(mapState,mapDispatch)(Login);
