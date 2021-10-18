import Loadable from 'react-loadable';
import React from 'react'
const LoadableComponent = Loadable({
  //加载这个组件里面的 index.js 的内容
  loader: () => import('./'),
  //加载时显示的页面
  loading(){
      return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>
