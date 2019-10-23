import React, { Component } from 'react';
import TodoInput from './TodoInput';
import ToDoShow from './TodoShow';
export default class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            Val:[]
        }
    }
    addVal = (val) => {
        this.setState({
            Val:[...this.state.Val,val]
        },()=>{
            localStorage.setItem(0,JSON.stringify(this.state.Val));
        })
    }

    getVal = () => {
        if(localStorage.length <=0){
            return;
        }else{
            this.state.Val = JSON.parse(localStorage.getItem(0));
            this.setState({
                Val:this.state.Val
            })
        }
    }
    componentDidMount(){
        //获取 缓存  并渲染
        this.getVal();
    }
    removeNode = (key)=>{
        //获取key，从数组中查询并删除
        this.state.Val.splice(key,1);
        this.setState({
            Val:this.state.Val
        },()=>{
            localStorage.setItem(0,JSON.stringify(this.state.Val));
        });
    }
    finish = (obj)=>{
        this.state.Val[obj.id].schedule = obj.checked;
        this.setState({
            Val:this.state.Val
        },()=>{
            localStorage.setItem(0,JSON.stringify(this.state.Val));
        });
    }
    render() {
        return (
            <div>
                <div><TodoInput addVal = {this.addVal}/></div>
                <div><ToDoShow data = {this.state.Val} remove = {this.removeNode} finish = {this.finish}/></div>
            </div>
        )
    }
}
