import styled from 'styled-components'
export const LoginWrapper = styled.div`
    width:100%;
    height:1000px;
    background:grey;
    position:relative;
`
export const Middle=styled.div`
    width:300px;
    height:180px;
    background:#333;
    position:absolute;
    top:300px;
    left:500px;
    input{
        width:200px;
        height:30px;
        background:#fff;
        outline:none;
        border:none;
    }
    .userName {
        position:absolute;
        top:30px;
        left:50px;
    }
    .password {
        position:absolute;
        top:80px;
        left:50px;
    }
`
export const Button = styled.div`
    width:200px;
    height:30px;
    line-height:30px;
    border-radius:20px;
    text-align:center;
    background:skyblue;
    position:absolute;
    top:130px;
    left:50px;
`