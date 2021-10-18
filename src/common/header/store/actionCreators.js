// 用 es6简写
import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
// 这个action 不需要导出,只为了辅助 thunkAction
const getListAction = (list) =>({
    type:constants.getListType,
    // 此时传递过来的 list是普通数据,不是 immutable 的数据
    // 为了和 reducer 里面的 immutable数据保持一致,要把传递过来的原来数据转成 immutable
    // list
    list:fromJS(list),
    // 每页显示10个
    totalPage:Math.ceil(list.length/10)
})
export const addClassAction = () =>({
    type:constants.addClassType
})

export const removeClassAction = () =>({
    type:constants.removeClassType
})
export const thunkAction = () => {
    return (dispatch) => {
        //  axios查找路径会先查找当前目录,如果没有找到会去 public 里面找
        axios.get('api/searchList.json').then((res)=>{
            const action = getListAction(res.data.data)
            dispatch(action)
        }).catch(()=>{
            console.log("获取失败");
        })
    }
}
export const handleMouseAction = () => ({
    type:constants.handleMouseType
})

export const mouseLeaveAction = () => ({
    type:constants.mouseLeaveType
})

export const pageChangeAction = (page) => ({
    type:constants.pageChangeType,
    page
})