(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{151:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),s=n.n(c),r=n(13),i=n.n(r),o=n(20),l=n(18),d=n(45),j=n(29),h=n(28),m=n(163),u=[{field:"id",headerName:"ID",width:70},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",width:90},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.getValue("firstName")||""," ").concat(e.getValue("lastName")||"")}}],b=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lannister",firstName:"Cersei",age:42},{id:3,lastName:"Lannister",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}],O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={name:"React"},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"grid",style:{height:400,width:"100%",border:"dash"},children:Object(a.jsx)(m.a,{rows:b,columns:u,pageSize:5,checkboxSelection:!0})})}}]),n}(c.Component),p={},x=(new Date).getHours(),f="";x>4&&x<12?(f="Good Morning",p.color="Green"):x>12&&x<19?(f="Good Afternoon",p.color="orange"):(f="Good Night",p.color="Blue");var v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={name:"React"},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{style:p,children:f})})}}]),n}(c.Component),C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"userList",children:[Object(a.jsx)("h1",{className:"userListHeader",children:"USER LISTS USING AXIOS API CALL "}),Object(a.jsx)("ul",{children:this.props.userList.map((function(e){return Object(a.jsxs)("li",{children:[e.name," "]})}))})]})}}]),n}(s.a.Component),g=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:"ABOUT"})})}}]),n}(s.a.Component),N=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:"CAREER"})})}}]),n}(s.a.Component),w=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:"Error Page"})})}}]),n}(s.a.Component),y=n(290),k=n(289),E=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{className:"homePage",children:"GET FREE IMAGES FOR HOME PAGE"})}),Object(a.jsxs)(y.a,{columns:3,divided:!0,children:[Object(a.jsxs)(y.a.Row,{children:[Object(a.jsx)(y.a.Column,{children:Object(a.jsx)(k.a,{as:"a",size:"medium",src:"https://via.placeholder.com/600/92c952",rounded:!0})}),Object(a.jsx)(y.a.Column,{children:Object(a.jsx)(k.a,{as:"a",size:"medium",src:"https://via.placeholder.com/600/d32776",rounded:!0})}),Object(a.jsx)(y.a.Column,{children:Object(a.jsx)(k.a,{as:"a",size:"medium",src:"https://via.placeholder.com/600/f66b97",rounded:!0})})]}),Object(a.jsxs)(y.a.Row,{children:[Object(a.jsx)(y.a.Column,{children:Object(a.jsx)(k.a,{as:"a",size:"medium",src:"https://via.placeholder.com/600/56a8c2",rounded:!0})}),Object(a.jsx)(y.a.Column,{children:Object(a.jsx)(k.a,{as:"a",size:"medium",src:"https://via.placeholder.com/600/b0f7cc",rounded:!0})}),Object(a.jsx)(y.a.Column,{children:Object(a.jsx)(k.a,{as:"a",size:"medium",src:"https://via.placeholder.com/600/51aa97",rounded:!0})})]})]})]})}}]),n}(s.a.Component),I=(n(151),n(166)),S=n.n(I),H=(n(160),n(291)),T=n(288),R=n(23),A=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a.state={name:"React",showHideComponent1:!1,showHideComponent2:!1,persons:[],activeItem:"home"},a.hideComponent=a.hideComponent.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"hideComponent",value:function(e){switch(console.log(e),e){case"showHideComponent1":this.setState({showHideComponent1:!this.state.showHideComponent1});break;case"showHideComponent2":this.setState({showHideComponent2:!this.state.showHideComponent2})}}},{key:"componentDidMount",value:function(){var e=this;S.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e.state.persons=t.data,console.log("THE PERSONS STAte",e.state.persons),e.setState({persons:e.state.persons})}));var t=window.location.pathname.substring(1).length?window.location.pathname.substring(1):"home";this.setState({activeItem:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.showHideComponent1,c=t.showHideComponent2,s=this.state.activeItem;return console.log("THE STATUW IN RENDED"),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"buttonComponent",children:[Object(a.jsx)("button",{className:"tableComponent",onClick:function(){return e.hideComponent("showHideComponent1")},children:"Toggle Table component"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"timeComponent",onClick:function(){return e.hideComponent("showHideComponent2")},children:"Toggle Time component"}),Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"WELCOME TO REACT PLATE"})})]}),Object(a.jsx)(H.a,{inverted:!0,children:Object(a.jsxs)(T.a,{inverted:!0,pointing:!0,secondary:!0,children:[Object(a.jsx)(T.a.Item,{href:"/home",name:"home",active:"home"===s,onClick:this.handleItemClick}),Object(a.jsx)(T.a.Item,{href:"/about",name:"about",active:"about"===s,onClick:this.handleItemClick}),Object(a.jsx)(T.a.Item,{href:"/career",name:"career",active:"career"===s,onClick:this.handleItemClick})]})}),Object(a.jsxs)(R.c,{children:[Object(a.jsx)(R.a,{exact:!0,path:"/",component:E}),Object(a.jsx)(R.a,{exact:!0,path:"/home",component:E}),Object(a.jsx)(R.a,{exact:!0,path:"/about",component:g}),Object(a.jsx)(R.a,{exact:!0,path:"/career",component:N}),Object(a.jsx)(R.a,{component:w})]}),!n&&!c&&Object(a.jsx)(C,{userList:this.state.persons}),n&&Object(a.jsx)(O,{}),Object(a.jsx)("hr",{}),c&&Object(a.jsx)(v,{})]})}}]),n}(s.a.Component),L=n(128);i.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(L.a,{children:Object(a.jsx)(A,{})})}),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.942afdea.chunk.js.map