// 基本
import React, { Fragment } from "react";
// 样式
import {
  Nav,
  Logo,
  Middle,
  Navitem,
  Add,
  Button,
  Search,
  SearchWrapper,
  SearchContent,
  SearchTitle,
  SearchChange,
  SearchLabel,
} from "./style";
// 数据的获取与更改
import { connect } from "react-redux";

import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
// 动画
import { CSSTransition } from "react-transition-group";
//路由
import { Link } from "react-router-dom";

const Header = (props) => {
  // 解决引入csstransition 后报错的问题: finddomnode is deprecated in strictmode
  const nodeRef = React.useRef(null);
  const {
    searchFlag,
    addClass,
    removeClass,
    list,
    page,
    totalPage,
    handleMouse,
    mouseLeave,
    mouseIn,
    pageChange,
    login,
    logOut,
  } = props;
  // 把 immutable 的数组转换成 js 的数组,这样就可以通过[]的方法来获取对象了
  const newList = list.toJS();
  const pageList = [];
  // 只有当 newList 存在的时候才进行循环,避免刚开始没循环时 key 值报错
  // if(newList.length){
  // }
  for (let i = (page - 1) * 10; i < page * 10; i++) {
    pageList.push(<SearchLabel key={[i]}>{newList[i]}</SearchLabel>);
  }

  return (
    <Fragment>
      <Nav>
        <Link to="/">
          <Logo />
        </Link>

        <Middle>
          <Navitem className="left active">
            <span className="iconfont">&#xe8b9;</span>
            首页
          </Navitem>
          <Navitem className="left">
            <span className="iconfont">&#xe6c5;</span>
            下载
          </Navitem>
          <SearchWrapper>
            <CSSTransition
              nodeRef={nodeRef}
              in={searchFlag}
              timeout={500}
              classNames="search"
            >
              <Search
                ref={nodeRef}
                // 根据 list 的数目来确定是否需要获取ajax 请求,避免无意义的请求发送
                // onFocus={addClass}
                onFocus={() => {
                  addClass(list);
                }}
                onBlur={removeClass}
              ></Search>
            </CSSTransition>
            <span className={searchFlag ? "active iconfont" : "iconfont"}>
              &#xe61b;
            </span>
            <SearchContent
              className={searchFlag || mouseIn ? "active" : ""}
              onMouseEnter={handleMouse}
              onMouseLeave={mouseLeave}
            >
              <SearchTitle>
                热门搜索
                <SearchChange
                  onClick={() => {
                    pageChange(page, totalPage);
                  }}
                >
                  换一换
                </SearchChange>
              </SearchTitle>
              <div>{pageList}</div>
            </SearchContent>
          </SearchWrapper>
          {login ? (
            <Navitem className="right" onClick={logOut}>
              退出
            </Navitem>
          ) : (
            // 确保 Link 标签里面不是 a 标签,否则会导致<a> cannot appear as a descendant of <a>.
            <Link to="/login">
              <Navitem className="right">登陆</Navitem>
            </Link>
          )}

          <Navitem className="right">
            <span className="iconfont">&#xe61b;</span>
          </Navitem>
        </Middle>

        <Add>
          <Button className="reg">注册</Button>
          <Link to="/write">
            <Button className="write">
              <span className="iconfont">&#xe600;</span>
              写文章
            </Button>
          </Link>
        </Add>
      </Nav>
    </Fragment>
  );
};
const allState = (state) => ({
  // 如果 store只有一个且 reducer是用传统方法创建
  // return {searchFlag: state.searchFlag};
  // 如果从父 store里引入子 store里的 reducer
  // return {searchFlag:state.header.searchFlag}
  // 如果reducer是用 immutable 创建,可以用以下任意一种写法
  // return{searchFlag:state.get('header').get('searchFlag')}
    searchFlag: state.getIn(["header", "searchFlag"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
});
const allAction = (dispatch) => {
  return {
    addClass(list) {
      // console.log(list.size);
      // 当 list为0的时候再去执行 ajax 请求
      // 下面的简写表示当前面为 true 时才执行后面的 dispatch 方法
      list.size === 0 && dispatch(actionCreators.thunkAction());
      dispatch(actionCreators.addClassAction());
    },
    removeClass() {
      dispatch(actionCreators.removeClassAction());
    },
    handleMouse() {
      dispatch(actionCreators.handleMouseAction());
    },
    mouseLeave() {
      dispatch(actionCreators.mouseLeaveAction());
    },
    pageChange(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.pageChangeAction(page + 1));
      } else {
        dispatch(actionCreators.pageChangeAction(1));
      }
    },
    logOut() {
      dispatch(loginActionCreators.logoutAction());
    },
  };
};
export default connect(allState, allAction)(Header);
