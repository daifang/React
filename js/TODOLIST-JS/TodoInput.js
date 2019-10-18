import React, { Component } from 'react'

export default class TodoInput extends Component {
    constructor(){
        super();
        this.state = {
            value:[]
        }
    }
    render() {
        let div = {
            backgroundColor:"rgb(39, 39, 39)",
            width:"100%",
            height:"50px",
            lineHeight:"50px"
        }
        let input = {
            borderRadius:"5px",
            width:"35%",
            height:"30px",
            fontSize:"17px",
            textAlign:"center",
            float:"left",
            marginLeft:"10%",
            marginTop:"5px"
        }
        let h1 = {
            color:"white",
            float:"left",
            marginTop:"0px",
            marginLeft:"10%"
        }
        return (
            <div style = {div}>
                <h1 style={h1}>TodoList</h1>
                <input type='text' placeholder = '添加ToDo' style = {input} onKeyDown = {(e)=>{this.upLoad(e)}}/>
            </div>
        )
    }
    upLoad = e => {
        if(e.keyCode === 13){
            if(e.target.value === ''){
                alert('信息不能为空');
            }else{
                this.props.addVal({title:e.target.value,schedule:false});
                e.target.value = '';
            }
        }
    }
}