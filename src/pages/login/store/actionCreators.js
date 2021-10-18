import * as constants from './constants'
import axios from 'axios'
const changeLogin = () => ({
    type:constants.loginType,
    value:true
})
export const loginAction = (account,password) => {
    return (dispatch) =>{
        // 实际开发中这里应该用 post 而不是用 get
        axios.get('/api/login.json?account='+account+'&password='+password).then(
            (res) => {
                const result = res.data.data;
                if(result){
                    dispatch(changeLogin())
                }else {
                    alert('登陆失败')
                }
            }
        ).catch()
    }
}
export const logoutAction = () => ({
    type:constants.logoutType,
    value:false
})