(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(20),o=n(19),i=n(30),s=n(33),r=n(32),c=n(6),l=n(13),d=n(0),m=n.n(d),h=n(11),u=n.n(h),j=n(81),b=[{field:"id",headerName:"ID",width:70},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",width:90},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.getValue("firstName")||""," ").concat(e.getValue("lastName")||"")}}],p=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lannister",firstName:"Cersei",age:42},{id:3,lastName:"Lannister",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}],f=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={name:"React"},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"grid",style:{height:400,width:"100%",border:"dash"},children:Object(l.jsx)(j.a,{rows:p,columns:b,pageSize:5,checkboxSelection:!0})})}}]),n}(d.Component),O={},N=(new Date).getHours(),C="";N>4&&N<12?(C="Good Morning",O.color="Green"):N>12&&N<19?(C="Good Afternoon",O.color="orange"):(C="Good Night",O.color="Blue");var g=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={name:"React"},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{style:O,children:C})})}}]),n}(d.Component),x=n(49),v=n(83),w=n(42);n(118);function k(){var e=m.a.useState(null),t=Object(c.a)(e,2),n=t[0],a=t[1],o=function(e){console.log("OPEN",e),a(null)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(x.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},children:"Open Menu"}),Object(l.jsxs)(v.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:o,children:[Object(l.jsx)(w.a,{onClick:o,children:"Profile"}),Object(l.jsx)(w.a,{onClick:o,children:"My account"}),Object(l.jsx)(w.a,{onClick:o,children:"Logout"})]})]})}var y=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={name:"React",showHideComponent1:!1,showHideComponent2:!1},e.hideComponent=e.hideComponent.bind(Object(i.a)(e)),e}return Object(o.a)(n,[{key:"hideComponent",value:function(e){switch(console.log(e),e){case"showHideComponent1":this.setState({showHideComponent1:!this.state.showHideComponent1});break;case"showHideComponent2":this.setState({showHideComponent2:!this.state.showHideComponent2})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.showHideComponent1,a=t.showHideComponent2;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"buttonComponent",children:[Object(l.jsx)("button",{className:"tableComponent",onClick:function(){return e.hideComponent("showHideComponent1")},children:"Toggle Table component"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"timeComponent",onClick:function(){return e.hideComponent("showHideComponent2")},children:"Toggle Time component"}),Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"WELCOME TO REACT PLATE"})})]}),n&&Object(l.jsx)(f,{}),Object(l.jsx)("hr",{}),a&&Object(l.jsx)(g,{})]})}}]),n}(m.a.Component);u.a.render(Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)(y,{})]}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.89aeb57d.chunk.js.map