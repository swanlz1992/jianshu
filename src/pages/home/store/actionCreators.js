import axios from "axios";
import * as constants from './constants'
import {fromJS} from 'immutable';
const getHomeData = (result) => ({
  type: constants.getHomeDataType,
  topicList: result.topicList,
  listContent: result.listContent
});
const getMoreList = (list,nextPage) => ({
  type:constants.getMoreType,
  list:fromJS(list),
  nextPage
})
export const getHomeDataAction = () => {
  return (dispatch) => {
    axios
      .get("/api/home.json")
      .then((res) => {
        const result = res.data.data;
        dispatch(getHomeData(result));
      })
      .catch
      // console.log("获取失败")
      ();
  };
};
export const addMoreAction = (page) => {
  return (dispatch) => {
    axios.get("api/homeAdd.json?page"+page)
      .then((res)=>{
        const result = res.data.data;
        dispatch(getMoreList(result,page+1))
      })
  }
}
export const toggleShow = (flag) => ({
  type:constants.toggleShowType,
  flag
})
