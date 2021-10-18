// 习惯把 index.js 作为 子store 所有文件的导出文件,这样可以少写路径
import reducer from './reducer';
import * as actionCreators from './actionCreators'
import * as constants from './constants'
export {reducer,actionCreators,constants}