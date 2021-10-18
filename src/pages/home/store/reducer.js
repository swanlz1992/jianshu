import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
  topicList: [],
  listContent: [],
  listPage:0,
  showScroll:false
});
const getHomeData = (state,action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    listContent:fromJS(action.listContent)
  })
}
const getMore = (state,action) => {
  return state.merge({
    listContent:state.get('listContent').concat(action.list),
    listPage:action.nextPage
  })
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.getHomeDataType:
      // return state.merge({
      //   topicList: fromJS(action.topicList),
      //   listContent:fromJS(action.listContent)
      // })
      // 代码精简
      return getHomeData(state,action)
    case constants.getMoreType:
      // return state.set('listContent',state.get('listContent').concat(action.list))
      return getMore(state,action)
    case constants.toggleShowType:
      return state.set('showScroll',action.flag)
    default:
      return state;
  }
};
