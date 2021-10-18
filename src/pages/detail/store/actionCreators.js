import axios from "axios"
import * as constants from './constants'
const detailAction = (title,content) => ({
    type:constants.detailType,
    title,
    content
})
export const getDetailAction = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then(
            (res)=>{
                const result = res.data.data;
                dispatch(detailAction(result.title,result.content))
            }
        ).catch()    
    }
}