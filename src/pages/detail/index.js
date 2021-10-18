import React,{Component} from 'react'
import {DetailWrapper,Header,Content} from './style'
import {connect} from "react-redux"
// 如果detail 是异步组件 ,为了解决加载时与传id不一致的问题,需要
import { withRouter } from 'react-router-dom'
import {actionCreators} from './store'
class Detail extends Component {
    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                {/* 避免转义 */}
                <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount(){
        // this.props.match.params.id可以拿到上一个页面传递的 id
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapState = (state) =>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})
const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetailAction(id))
    }
})
export default connect(mapState,mapDispatch)(withRouter(Detail));