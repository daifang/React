import React, { Component } from 'react'

export default class TodoShow extends Component {
    getId = (e) => {
        this.props.remove(e.target.id);
    }
    getChecked = (e)=>{
        var obj = {id:e.target.id,checked:e.target.checked};
        this.props.finish(obj);
        
    }
    data = (data,schedule)=>{
        // console.log(2);
        // console.log(data);
        if(data.length === 0){
            return ;
        }else{
            return data.map((item,index)=>{
                // console.log(1);
                let checkBox = {
                    float:"left",
                    width:"20px",
                    height:"20px"
                };
                let li = {
                    border:"1px solid black",
                    textAlign:"center",
                    fontSize:"20px",
                    borderRadius:"5px",
                    marginTop:"5px",
                    listStyle:"none",
                    backgroundColor:"gray",
                    color:"white"
                }   
                let btn = {
                    float:"right",
                    borderRadius:"5px",
                    border:"none",
                    marginTop:"3px",
                    marginRight:"5px",
                    width:"20px",
                    height:"20px"
                }
                // console.log(1);
                if(item.schedule === schedule){
                    // console.log(0);
                    return (
                        <li style = {li} key = {index}>
                            <input type = 'checkbox' value = {item.title} style={checkBox} onChange = {(e)=>{this.getChecked(e)}} id = {index} checked = {item.schedule}/>
                            <span>{item.title}</span>
                            <input type="button" value = "X" style={btn} onClick = {(e)=>{this.getId(e)}} id = {index}/>
                        </li>
                    )
                }
            })
        }
        
    }
    number = (data,schedule)=>{
        let num = 0;
        data.map((item)=>{
            if(item.schedule === schedule){
                num++;
            }
        });
        return num;
    }
    render() {
        let div = {
            marginTop:"15px"
        }
        let box = {
            width:"40%",
            textAlign:"center",
            marginTop:"30px",
            marginLeft:"25%",
        }
        let span = {
            float:"right",
            width:"20px",
            height:"20px",
            backgroundColor:"white",
            borderRadius:"5px"
        }
        let bottom = {
            width:"100%",
            textAlign:"center"
        }
        return (
            <div style = {box}>
               <div style = {div}>
                   <span style = {span}>{this.number(this.props.data,false)}</span>
                   <h2>正在进行</h2>
                   <ul>{this.data(this.props.data,false)}</ul>
               </div>
               <div style = {div}>
                    <span style = {span}>{this.number(this.props.data,true)}</span>
                    <h2>已经完成</h2>
                    <ul>{this.data(this.props.data,true)}</ul>
                </div> 
                <div style = {bottom}><span>@2019 代天放 React-file</span></div>
            </div>
        )
    }
}
