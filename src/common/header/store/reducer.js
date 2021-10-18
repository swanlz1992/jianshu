import * as constants from './constants'
// 改变state的方法1: 通过深拷贝来实现
// const defaultState = {
//     searchFlag:false
// }
// export default (state=defaultState,action) => {
//     if(action.type === constants.addClassType){
//         const newState = JSON.parse(JSON.stringify(state))
//         newState.searchFlag = true;
//         return newState;
//     }
//     if(action.type === constants.removeClassType){
//         const newState = JSON.parse(JSON.stringify(state))
//         newState.searchFlag = false;
//         return newState;
//     }
//     return state

// 改变 state第2种方式, 通过immutable 里面的 fromJS来创建/获取(get.)/修改(set.)
import {fromJS} from 'immutable'
// 用 fromJS创建的对象不可变, 要改变需要借用 set方法
const defaultState = fromJS({
    searchFlag:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
})
export default (state=defaultState,action) => {
    // if(action.type === constants.addClassType){
    //     return state.set('searchFlag',true)
    // }
    // if(action.type === constants.removeClassType){
    //     return state.set('searchFlag',false)
    // }
    // if(action.type === constants.getListType){
    //     return state.set('list',action.list)
    // }
    // return state;
    // 用 switch 来简写
    switch(action.type) {
        case constants.addClassType:
            return state.set('searchFlag',true);
        case constants.removeClassType:
            return state.set('searchFlag',false);
        case constants.getListType:
            // return state.set('list',action.list).set('totalPage',action.totalPage);
            // 多个 set 的也可以用 merge 方法
            return state.merge({
                list:action.list,
                totalPage:action.totalPage
            })
        case constants.handleMouseType:
            return state.set('mouseIn',true)
        case constants.mouseLeaveType:
            return state.set('mouseIn',false)
        case constants.pageChangeType:
            return state.set('page',action.page)
        default:
            return state;
    }
}