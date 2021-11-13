import styled from "styled-components";
import logoPic from "../../static/navIcon.png";
export const Nav = styled.div`
  // overflow 一定要加, 不然会导致下面空出一块
  overflow: hidden;
  position: relative;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  // background:red;
`;
export const Logo = styled.div`
  display: block;
  position: absolute;
  top: 1px;
  left: 0;
  box-sizing: border-box;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Middle = styled.div`
  width: 945px;
  height: 100%;
  line-height: 28px;
  margin-left: 200px;
  font-size: 17px;
`;
export const Navitem = styled.div`
  padding: 15px;
  margin-left: 10px;
  color: #333;
  cursor: pointer;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    font-size: 15px;
  }
`;
export const Add = styled.div`
  // background:blue;
  float: right;
  position: relative;
  top: -58px;
  right: -360px;
  font-size: 15px;
`;
export const Button = styled.span`
  padding: 6px 20px;
  border-radius: 20px;
  line-height: 58px;
  margin-left: 20px;
  box-sizing: border-box;
  text-align: center;
  &.reg {
    width: 80px;
    color: #ea6f5a;
    border: 1px solid #ea6f5a;
  }
  &.write {
    width: 100px;
    background: #ea6f5a;
    color: #fff;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .search-enter {
    width: 160px;
  }
  .search-enter-active {
    width: 240px;
    transition: all 0.5s ease;
  }
  .search-enter-done {
    width: 240px;
  }
  .search-exit {
    width: 240px;
  }
  .search-exit-active {
    width: 160px;
    transition: all 0.5s ease;
  }
  .search-exit-done {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    top: 13px;
    right: 20px;
    color: #888;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 100%;
    &.active {
      background: #333;
      color: #fff;
    }
  }
`;
export const Search = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 30px;
  color: #333;
  padding: 4px 20px;
  background: #eee;
  border: none;
  outline: none;
  border-radius: 40px;
  margin: 9px;
  &.active {
    width: 200px;
  }
`;
export const SearchContent = styled.div`
  width: 240px;
  position: absolute;
  top: 56px;
  left: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #999;
  padding: 14px;
  opacity: 0;
  // display:none;
  &.active {
    // display:show;
    opacity: 100;
  }
`;
export const SearchTitle = styled.div`
  // float:left;
`;
export const SearchChange = styled.div`
  float: right;
`;
export const SearchLabel = styled.a`
  display: block;
  float: left;
  line-height: 12px;
  padding: 4px 6px;
  font-size: 12px;
  border: 1px solid #999;
  border-radius: 3px;
  margin: 4px 10px;
`;
