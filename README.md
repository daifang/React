# `React`
*[ES6_mine](https://github.com/daifang/js_LS/blob/master/ES6/ES6.md)*
## `全局安装`
```
$ npm i -g create-react-app
```
## `创建第一个App`
```
$ create-react-app [fileName]

//如果安装成功提示不是内部或外部命令
//npx:会自动到目录下查询命令文件，具体信息请看代码块下方链接

$ npx create-react-app [fileName]
```
[npx](http://www.ruanyifeng.com/blog/2019/02/npx.html)
## `启动APP`
```
$ npm start
```
## `后续安装路由的命令`
   * 新建一个新项目就要安一次，如果用得到的话
```
$ npm i reate-router-dom
```
****
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
   * 组件都会返回一个React元素
   * props:用于组件之间的通信，父组件<-->子组件，是只读的,大多数是父组件从子组件获取数据再进行操作
   * 组件命名 首字母大写
   * 
      周期类|含义
      -|-
      Mounting|已经插入真实DOM
      Updating|加载中/正在重新渲染
      unMounting|已经移出DOM
   *  
      周期函数|何时调用
      -|-
      componentWillMount|渲染前调用
      componentDidMount|第一次渲染完成后调用
      componentWillReceiveProps|组件接受一个新的props时调用，但在第一次渲染时不会被调用
      shouldComponentUpdate|返回布尔值，确认是否进行更新
      componentDidUpdate|组件完成更新后立即调用
      componentWillUnmount|组件从DOM移除之前立即调用
      

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
         name:'daifang'
      }
    ```
* ## `受控组件`
   * 组件节点的各种值都是从this.state中获取，渲染需要用到this.setState
* ## `非受控组件`
   * 组件节点的改变使用refs进行操控，不必使用state
* ## `Hook实现组件(只可以在函数组件中使用)`
   * useState:实现类似setState函数和初始设置state
   * useEffect:实现类似组件的生命周期函数
   * 
      参数|含义
      -|-
      callback|声明周期到达时执行的方法
      arr|数组当中可以定义判断条件，当数组中的元素和之前状态不同时会调用函数，反之不会执行函数体
   * 使用方法
   ```
      import {useState,useEffect} from 'react';
      function Name(){
         //设置初始值‘daifang’，并创建一个类似setState的方法，但是它不是异步执行的，最好写在组件的最上方

         let [name,setName] = useState('daifang');

         //useEffect = componentDidMound + componentDidUpdate

         useEffect(()=>{
            /*do something*/
            setName('fangdai');

         },[/*条件依赖*/]);
         //当条件依赖为空数组时,执行一次后结束
         //useEffect 可以创建多个，根据条件依赖进行判断是否要执行对应的代码段
      }
   ```
   * 自定义Hook
   ```
   function useFetch(url){
      let [data,setData] = useState;
      useEffect(()=>{
         fetch(url).then(res=>res.json()).then(data=>{
            setData(data);
         })
      });
      return data;
   }


   //调用
   function Topic(){
      //url为后端提供的接口
      let data = useFetch(url);

      return (
         <ul>
            data.map((item,index)=>{
               return (
                  <ul>
                     <li key = {index}>{item}</li>
                  </ul>
               )
            })
         </ul>
      )
   }
   ```

***2019-10-25-Hook***
* ## `Router`
   * Router
   * Route
   * Link
   *  代码展示(仅展示结构，不是最终代码，该结构是放到组件中return出来的)
      ```
         //引入
         import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
         //外部套一个Router标签对儿
         <Router>
            <ul>
               //路由的设置
               <li>
                  <Link to = '/daifang'>daifang</Link>
               </li>
               <li>
                  <Link to = '/fangdai'>fangdai</Link>
               </li>             
            </ul>
            //组件加载，这个标签在哪，组件就会加载到哪里
            <Route path='daifang' component = {Daifang}/>
            <Route path='fangdai' component = {Fangdai}/>
         </Router>

      ``` 
* ## `createContext()`
   * React.createContext()
   * React.useContext()
   * Provider
   * 使用代码
   ```
      //嫌引入麻烦可以解构引入
      import React from 'react';
      let ctx = React.createContext();
      //标签内的组件都可以访问data
      <ctx.Provider data={{name:'daifang',pwd:'fangdai'}}>
         <Daifang/>
         <Fangdai/>
      </ctx.Provider>
   ```
   * 组件获取数据的方法
   * Daifang组件,Fangdai组件相同操作
   ```
      function Daifang(){
         let data = React.useContext(ctx);
         console.log(ctx);
      }
   ```
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
   * [详情请点击](https://github.com/daifang/js_LS/blob/master/ES6/ES6.md)
## Object.assign(obj_a,obj_b,obj_c,······)
   * ### `把后面的对象整合到第一个对象上`
   * ### 拷贝
      ```
         var obj = {a:100};
         var obj_new = Object.assign({},obj);
      ```
## Object.keys(obj).forEach(item=>{})
   * ### `遍历对象`
   * 示例
      
       ```
         Object.keys(obj).forEach((item)=>{
            console.log(item);
         });
      ```

## Array.map((item,index)=>{})

   * ### `遍历数组`
   * 示例
      ```
         let arr = [0,1,2,3,4,5,6];
         arr.map((item,index)=>{
            //item:值
            //index:索引
            console.log('arr['+index+']' + ':' + item);
         })
         //arr[0]:0 // arr[1]:1 // arr[2]:2 // arr[3]:3 // arr[4]:4 // arr[5]:5 // arr[6]:6
      ```