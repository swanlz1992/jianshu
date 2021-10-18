// 用combineReducers可以实现多个 reducer 的连接, 需要安装redux-immutable, redux 和 redux-immutable 里面都有combineReducers, 但如果用 react-redux创建的是不可变的
// import { combineReducers } from "redux";
import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'
const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})
export default reducer;