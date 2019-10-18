# `React`
*[ES6_mine](https://github.com/daifang/js_LS/blob/master/ES6/ES6.md)*
## `全局安装`
```
$ npm i -g create-react-app
```
## `启动APP`
```
$ npm start
```
## 基本知识
* ## `引入模块`
   * 建议使用import
   ```
      import [Name] from './src';

      var Name = require('./src');
   ```
* ## `渲染`
   * 简单渲染
   ```
      //在id为 root 的节点下 创建并添加一个ele，ele可以自己用JSX定义
      var ele = <h1>Hello React</h1>
      ReactDom.render(ele,document.getElementbyId('root'));
   ```
   * 引入组件渲染
      
   ```
      import App from './app.js';
      ReactDom.render(<App/>,document.getElementbyId('root'));
   ```
* ## `JSX`
   ```
      var ele = <h1>Hello React</h1>;

      //这就是一个JSX表达式，实际在运行中会成为一个普通JS对象
      var str = 'Hello World';
      var ele_1 = <h1>{str}</h1>; 
   ```
   * React元素一旦创建，其内容不会再被修改
   * 更新元素的方法，ReactDom.render()/this.setState({})
* ## `组件`
   * 可以理解为部分，零件，制作汽车一定会先造各个零件再到车间进行组装各个部分，然后再进行最终组装，而组件就是各个部分
   * 组件会返回一个React元素
   * props:用于组件之间的通信，父组件-->子组件，是只读的
   * 组件命名 首字母大写
      
   ```
      //建议 使用 import
      import React from 'react';
      //声明
      class App extends React.Component{
         constructor(){
            //必须先调用super()，否则无法使用props
            super();

            //设置初始状态，子组件的props可以进行访问但不可修改
            this.state = {
               one:[],//array
               two:{},//object
               three:''//string
            }
         }

         //渲染函数，必须存在，否则无法运行
         render(){

         }
         //周期函数
          static getDerivedStateFromProps(){
             //挂载中
             //个人理解相当于，加载中或加载完成后的加载进程

          }
         componentDidMount(){
            //挂载完成，个人理解相当于页面加载完成时
            //可以写一些请求操作

         }

          componentDidCatch(){
             //错误处理
          } 

      }

   ```      
* ## `事件`
   * 点击弹出窗口
   ```
      import React from 'react';
      //最简单的事件触发
      class App extends React.Component{
         render(){
            return (
               <div>
                  <button onClick = {alert}/>
               </div>
            );
         };

         //建议使用箭头函数,以免this的混乱
         alert = ()=>{
            alert('点击触发');
         };
      }
   ```
   * 困难版(event对象和具体操作)
   ```
   import React from 'react';
   
   //效果:按下回车控制台打印输入信息并清空输入框

   class App extends React.Component{
      constructor(){
         super();
         this.state = {
            data:''
         }
      };
      render(){
         return (
            <div>
               <h3>按下Enter</h3>
               <input type = 'text' onKyedown = {(e)=>{this.printVal(e)}} value = {this.state.data}/>
            </div>
         );
      };

      //建议使用箭头函数,以免this的混乱
      printVal = (e)=>{
         //React适配严格等
         if(e.keyCode === 13){
            console.log(e.target.value);
            this.setState({
               this.state.data = '';
            })
         }
      };
   }
   ```
* ## `PropTypes`
   * 校验数据类型
   * 仅限于开发过程中使用
   * 引用
   ```
      import PropTypes from 'prop-types';
   ```
   * 使用方法
   ```
      //当data的数据类型不是String时，控制台会进行⚠，说明data不
      //是期望的String类型

      App.PropTypes = {
         data:PropTypes.string
      }
   ```
*2019-10-11_完成以上*

* ## `DefaultProps`
    * 如果this.prpos中有一个name属性则可以设置默认值
    ```
      Hello.defaultProps = {
         name:'Tom'
      }
    ```
* ## `受控组件`
   * 组件节点的各种值都是从this.state中获取，渲染需要用到this.setState
* ## `非受控组件`
   * 组件节点的改变使用refs进行操控，不必使用state
* ## `React 方法`
   * 
* ## `this.setState({})` 
   * ### 写法
      ```
         //state 获取的是state的上一个状态
         this.setState((state,props)=>({todo:state.todo+1}))

         //写法二
         
         this.setState({
            todo:this.state.todo + 1
         })

         //有什么同步的操作需要放到CallBack中执行，否则不能达到预期效果
         //执行顺序同步-->异步-->回调

         this.setState({
            todo:this.state.todo + 1
         },()=>{
            console.log(this.state.todo);
         })
      ```
# `用到的ES6方法`
## Object.assign(obj_a,obj_b,obj_c,······)
   * ### `把后面的对象整合到第一个对象上`
   * ### 拷贝
      ```
         var obj = {a:100};
         var obj_new = Object.assign({},obj);
      ```
## Object.keys(obj)
   * ### `遍历对象`
   * 示例
      
       ```
         Object.keys(obj).forEach((item)=>{
            console.log(item);
         });
      ```

