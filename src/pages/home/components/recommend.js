import React,{PureComponent} from 'react'
import {RecommendWrapper,RecommendItem} from '../style'
class Recommend extends PureComponent {
    render(){
        return (
            <div>
                <RecommendWrapper>
                    <RecommendItem
                     imgUrl="https://www.jianshu.com/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
                    ></RecommendItem>
                </RecommendWrapper>
            </div>
        )
    }
}
export default Recommend;