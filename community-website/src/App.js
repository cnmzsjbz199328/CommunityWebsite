// 导入React库，这是构建React应用的基础。
import React from 'react';

//import React, { useState } from 'react';
// 导入React Router的BrowserRouter, Route 和 Routes组件，用于实现客户端路由。
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 导入自定义的Navbar组件，通常用于展示导航条。
import Navbar from './components/Navbar';
// 导入自定义的Footer组件，通常用于展示页脚信息。
import Footer from './components/Footer';
// 导入自定义的Home组件，通常作为首页或默认显示的页面。
import Home from './components/Home';
// 导入logo图片资源。
import logo from './logo.svg';
// 导入自定义的CSS样式文件。
import './App.css';
// 导入自定义的ErrorBoundary组件，用于捕获并处理错误。
import ErrorBoundary from './ErrorBoundary';

/**
 * 定义应用程序的主组件App。
 * 
 * 此组件负责渲染整个应用的基本结构，包括导航栏、头部、主体内容和页脚。
 * 同时使用React Router来处理页面路由。
 */
function App() {
    //const [count, setCount] = useState(0); 
  return (
    <Router>
      <div className="App">
        {/* 渲染导航栏 */}
        <Navbar />

        <header className="App-header">
          {/* 显示Logo */}
          <img src={logo} className="App-logo" alt="logo" />
          {/* 提示用户如何修改和重载应用 */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* 链接到React官方文档 */}
          <a
            className="App-link"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Routes>
          {/* 根路由，当访问"/"时渲染Home组件 */}
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          {/* 保留位置以添加更多路由 */}
          {/* <Routes>组件确保只有匹配的<Route>被渲染 */}
        </Routes>

        {/* 渲染页脚 */}
        <Footer />
      </div>
    </Router>
  );
}

// 导出App组件供其他模块使用
export default App;