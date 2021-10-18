import styled from 'styled-components'
export const HomeWrapper = styled.div`
    index:0;
    overflow:hidden;    
    width:960px;
    margin:0px auto;
    // background:grey;
    padding:20px 30px;
    box-sizing:border-box;
`
export const HomeLeft = styled.div`
    width:625px;
    // height:300px;
    float:left;
    // background:green;
    .banner-img {
        width:625px;
        height:240px;
    }
`
export const HomeRight = styled.div`
    width:240px;
    height:100px;
    float:right;
    background:blue;
`
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:10px;

`
export const TopicItem = styled.div`
    overflow:hidden;
    float:left;
    height:32px;
    line-height:32px;
    margin:0px 12px 12px 0px;
    font-size:12px;
    padding:2px 12px 2px 0px ;
    color:#333;
    border-radius:4px;
    border:1px solid #333;
    .itemImg {
        display:block;
        float:left;
        width:30px;
        height:30px;
        margin-right:20px;
    }
`
export const ListItem = styled.div`
    position:relative;    
    width:620px;
    background:blue;
    padding:20px;
    // overflow:hidden;
    .title {
        
        font-size:18px;
        color:red;
    }
    .content {
        width:500px;
    }
    .pic {
        position:absolute;
        top:20px;
        right:20px;
        width:60px;
        height:60px;
        margin-bottom:20px;
    }
`
export const RecommendWrapper = styled.div`
    width:240px;
    height:200px;
    background:yellow;
    padding:10px;
`
export const RecommendItem = styled.div`
    width:240px;
    height:50px;
    background:url(${(props)=>props.imgUrl}) no-repeat;
    background-size:contain;
`
export const LoadMore = styled.div`
    width:660px;
    height:50px;
    line-height:50px;
    font-size:18px;
    text-align:center;
    background:red;
    color:#fff;
    border-radius:6px;
    margin-top:10px;
    pointer:cursor;
`
export const BackTop = styled.div`
    width:100px;
    height:50px;
    line-height:50px;
    padding:4px;
    text-align:center;
    position:fixed;
    bottom:30px;
    right:100px;
    background:yellow;
`
