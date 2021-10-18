import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/topic";
import List from "./components/list";
import Recommend from "./components/recommend";
import Writer from "./components/writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { BackTop } from "./style";
// 通过shouldComponentUpdate来避免一个组件数据改变时其他所有组件都要更新, reactfiber 内置了 PureComponent,PureComponent 底层内部自己已经设置了shouldComponentUpdate,这样就不需要我们自己手写了
// 记住如果用 PureComponent 时要用 immutable 来管理数据,不然会有很多坑
class Home extends PureComponent {
  BackTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              src="https://upload.jianshu.io/admin_banners/web_images/5043/454c047f28a8fd4c4f78571c0f88b4de285c060a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {this.props.showScroll ? (
            <BackTop onClick={this.BackTop}>返回顶部</BackTop>
          ) : null}
        </HomeWrapper>
      </div>
    );
  }
  componentDidMount() {
    this.props.getHomeData();
    this.bindEvents();
  }
  // 在组件挂载完成后绑定的事件,一定要记得设置组件销毁时把这个事件也一起移除
  componentWillUnmount(){
    window.removeEventListener("scroll", this.props.scrollShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.scrollShow);
  }

  shouldComponentUpdate
}
const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});
const actionsMap = (dispatch) => ({
  getHomeData() {
     dispatch(actionCreators.getHomeDataAction());
  },
  scrollShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleShow(true))
    } 
    else {
      dispatch(actionCreators.toggleShow(false))
    }
  }
});
export default connect(mapState, actionsMap)(Home);
