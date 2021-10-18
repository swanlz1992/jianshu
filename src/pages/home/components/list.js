import React from "react";
import { ListItem ,LoadMore} from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
// 使用 a标签的时候每次都会重新加载一次 html,这样很损耗性能,这不符合单页面应用的初衷.可以用 link 标签来代替 a 标签, to 代替 href
import { Link } from "react-router-dom";
const List = (props) => {
  const { listContent ,addMore,page} = props;
  return (
    <div>
      {listContent.map((item,index) => {
        return (
          // 动态路由方式来获取页面路由参数,让list与detail 内容相一致, 还有一种方式叫
          // <Link key={index} to='/detail'>
          <Link key={index} to={'/detail/' +item.get('id')}>
            <ListItem key={index}>
              <h3 className="title">{item.get("title")}</h3>
              <p className="content">{item.get("content")}</p>
              <img className="pic" alt="" src={item.get("url")} />
            </ListItem>
          </Link>
            
        );
      })}
      {/* 如果获取时不需要分页 */}
      {/* <LoadMore onClick={addMore}>加载更多</LoadMore> */}
      {/* 一般项目开发获取的数据都需要分页 */}
      <LoadMore onClick ={()=>addMore(page)}>加载更多</LoadMore>
    </div>
  );
};

const mapState = (state) => ({
  listContent: state.getIn(["home", "listContent"]),
  page:state.getIn(['home','listPage'])
});
const dispatchMap = (dispatch) => ({
  addMore(page){
    dispatch(actionCreators.addMoreAction(page))
  }
})

export default connect(mapState, dispatchMap)(List);
