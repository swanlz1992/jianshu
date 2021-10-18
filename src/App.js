import React from "react"; 
import store from "./store";
import { Provider } from "react-redux";
// 路由
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./common/header";
import Home from "./pages/home";
// 如果detail 是一个异步组件,需要这样写
import Detail from "./pages/detail/loadable.js"
import Login from "./pages/login";
import Write from "./pages/write";
const App = () => {
  return (
    <div>
      {/* Provider 里面最好只有一个 div */}
      <Provider store={store}>
        {/* 只有在一个 router 里面才可以用 Link 标签 */}
        <BrowserRouter>
          <Header />
          <div>
            {/* exact:路径完全一致时才会显示,不加则前缀一致都会显示 */}
            {/* <Route path='/' exact render={()=><div>home</div>}></Route> */}
            <Route path="/" exact component={Home}></Route>
            {/* 当页面需要加 id 时 */}
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );

}
export default App;
