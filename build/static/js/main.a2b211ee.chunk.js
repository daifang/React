(this.webpackJsonpxlzy=this.webpackJsonpxlzy||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),o=(a(14),a(8)),c=a(1),s=a(2),u=a(4),d=a(3),h=a(5),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).upLoad=function(t){13===t.keyCode&&(""===t.target.value?alert("\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a"):(e.props.addVal({title:t.target.value,schedule:!1}),t.target.value=""))},e.state={value:[]},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{backgroundColor:"rgb(39, 39, 39)",width:"100%",height:"50px",lineHeight:"50px"}},l.a.createElement("h1",{style:{color:"white",float:"left",marginTop:"0px",marginLeft:"10%"}},"TodoList"),l.a.createElement("input",{type:"text",placeholder:"\u6dfb\u52a0ToDo",style:{borderRadius:"5px",width:"35%",height:"30px",fontSize:"17px",textAlign:"center",float:"left",marginLeft:"10%",marginTop:"5px"},onKeyDown:function(t){e.upLoad(t)}}))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getId=function(e){a.props.remove(e.target.id)},a.getChecked=function(e){var t={id:e.target.id,checked:e.target.checked};a.props.finish(t)},a.data=function(e,t){return 0===e.length?void 0:e.map((function(e,n){if(e.schedule===t)return l.a.createElement("li",{style:{border:"1px solid black",textAlign:"center",fontSize:"20px",borderRadius:"5px",marginTop:"5px",listStyle:"none",backgroundColor:"gray",color:"white"},key:n},l.a.createElement("input",{type:"checkbox",value:e.title,style:{float:"left",width:"20px",height:"20px"},onChange:function(e){a.getChecked(e)},id:n,checked:e.schedule}),l.a.createElement("span",null,e.title),l.a.createElement("input",{type:"button",value:"X",style:{float:"right",borderRadius:"5px",border:"none",marginTop:"3px",marginRight:"5px",width:"20px",height:"20px"},onClick:function(e){a.getId(e)},id:n}))}))},a.number=function(e,t){var a=0;return e.map((function(e){e.schedule===t&&a++})),a},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={marginTop:"15px"},t={float:"right",width:"20px",height:"20px",backgroundColor:"white",borderRadius:"5px"};return l.a.createElement("div",{style:{width:"40%",textAlign:"center",marginTop:"30px",marginLeft:"25%"}},l.a.createElement("div",{style:e},l.a.createElement("span",{style:t},this.number(this.props.data,!1)),l.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c"),l.a.createElement("ul",null,this.data(this.props.data,!1))),l.a.createElement("div",{style:e},l.a.createElement("span",{style:t},this.number(this.props.data,!0)),l.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210"),l.a.createElement("ul",null,this.data(this.props.data,!0))),l.a.createElement("div",{style:{width:"100%",textAlign:"center"}},l.a.createElement("span",null,"@2019 \u4ee3\u5929\u653e React-file")))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).addVal=function(t){e.setState({Val:[].concat(Object(o.a)(e.state.Val),[t])},(function(){localStorage.setItem(0,JSON.stringify(e.state.Val))}))},e.getVal=function(){localStorage.length<=0||(e.state.Val=JSON.parse(localStorage.getItem(0)),e.setState({Val:e.state.Val}))},e.removeNode=function(t){e.state.Val.splice(t,1),e.setState({Val:e.state.Val},(function(){localStorage.setItem(0,JSON.stringify(e.state.Val))}))},e.finish=function(t){e.state.Val[t.id].schedule=t.checked,e.setState({Val:e.state.Val},(function(){localStorage.setItem(0,JSON.stringify(e.state.Val))}))},e.state={Val:[]},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getVal()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(p,{addVal:this.addVal})),l.a.createElement("div",null,l.a.createElement(g,{data:this.state.Val,remove:this.removeNode,finish:this.finish})))}}]),t}(n.Component);i.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a2b211ee.chunk.js.map