(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),o=n(7),a=n.n(o),s=(n(13),n(2)),c=n(3),h=n(5),d=n(4),u=(n(14),n(8)),l=(n(15),n(16),n(0)),f=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.col,i=e.row,r=e.snakeTimer,o=e.isFood,a=r>0?"yes-snake":o?"food":"";return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"node-".concat(i,"-").concat(n),className:"node ".concat(a),onClick:function(){return t.props.click()},children:['tabIndex = "0" onKeyDown = ',function(e){return t.props.keyDown(e)},">"]})})}}]),n}(r.a.Component),v=20,m=20,p=200,g=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).sendData=function(){t.props.parentCallBack(t.length-2)},t.handleKeyPress=function(e){var n,i=t.state,r=i.headPosition,o=i.direction,a=e.keyCode;"up"!==o&&"down"!==o||(n=38===a?"left":40===a?"right":o),"left"!==o&&"right"!==o||(n=37===a?"up":39===a?"down":o);var s="up"===o?[r[0]-1,r[1]]:"down"===o?[r[0]+1,r[1]]:"right"===o?[r[0],r[1]+1]:"left"===o?[r[0],r[1]-1]:[r[0],r[1]];s[0]===t.food[0]&&s[1]===t.food[1]&&t.eatFood(),s[0]>19||s[0]<0||s[1]>19||s[1]<0?t.gameOver():(parseInt(t.timers[s[0]][s[1]])>0&&t.gameOver(),t.setState({headPosition:s,direction:n}),clearInterval(t.timer),t.timer=setInterval((function(){return t.moveSnake()}),p))},t.state={grid:[],headPosition:[Math.floor(10),Math.floor(10)],direction:"up"},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=j();this.setState({grid:e}),this.timer=setInterval((function(){return t.moveSnake()}),p),this.timers=O(),this.length=2,this.food=[14,14]}},{key:"moveSnake",value:function(){var t=this.state.headPosition,e="up"===this.state.direction?[t[0]-1,t[1]]:"down"===this.state.direction?[t[0]+1,t[1]]:"right"===this.state.direction?[t[0],t[1]+1]:[t[0],t[1]-1];e[0]>19||e[0]<0||e[1]>19||e[1]<0?this.gameOver():(parseInt(this.timers[e[0]][e[1]])>0&&this.gameOver(),e[0]===this.food[0]&&e[1]===this.food[1]&&this.eatFood(),this.setState({headPosition:e}))}},{key:"eatFood",value:function(){var t=parseInt(Math.random()*m),e=parseInt(Math.random()*v);this.length++,this.food=[t,e]}},{key:"gameOver",value:function(){var t=this;clearInterval(this.timer);var e="score: "+(this.length-2);alert(e);var n=j(),i=[Math.floor(10),Math.floor(10)];this.setState({grid:n,headPosition:i,direction:"up"}),this.length=2,this.timers=O(),this.timer=setInterval((function(){return t.moveSnake()}),p)}},{key:"handleClick",value:function(){var t=this,e=this.state.headPosition,n="up"===this.state.direction?"right":"right"===this.state.direction?"down":"down"===this.state.direction?"left":"up",i="up"===n?[e[0]-1,e[1]]:"down"===n?[e[0]+1,e[1]]:"right"===n?[e[0],e[1]+1]:[e[0],e[1]-1];i[0]===this.food[0]&&i[1]===this.food[1]&&this.eatFood(),i[0]>19||i[0]<0||i[1]>19||i[1]<0?this.gameOver():(parseInt(this.timers[i[0]][i[1]])>0&&this.gameOver(),this.setState({headPosition:i,direction:n}),clearInterval(this.timer),this.timer=setInterval((function(){return t.moveSnake()}),p))}},{key:"render",value:function(){var t=this,e=this.state,n=e.grid,i=e.headPosition;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"grid",children:n.map((function(e,n){return Object(l.jsx)("div",{children:e.map((function(e,n){var r=Object(u.a)(e,2),o=r[0],a=r[1];o===i[0]&&a===i[1]&&(t.timers[o][a]+=t.length),t.timers[o][a]>0&&(t.timers[o][a]-=1);var s=!1;return t.food[0]===o&&t.food[1]===a&&(s=!0),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(f,{col:a,row:o,snakeTimer:t.timers[o][a],click:function(){t.handleClick()},keyDown:function(e){return t.handleKeyPress(e)},isFood:s})})}))},n)}))})})}}]),n}(r.a.Component),j=function(){for(var t=[],e=0;e<m;e++){for(var n=[],i=0;i<v;i++)n.push([i,e]);t.push(n)}return t},O=function(){for(var t=[],e=0;e<m;e++){for(var n=[],i=0;i<v;i++)n.push([0]);t.push(n)}return t},k=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(g,{})})}}]),n}(r.a.Component),b=k,y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),o(t),a(t)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),y()}],[[18,1,2]]]);
//# sourceMappingURL=main.4f5774f9.chunk.js.map