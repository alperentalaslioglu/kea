webpackJsonp([18],{569:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return v});var l,c,a=n(6),s=n.n(a),f=n(149),p=(n.n(f),n(10)),b=n.n(p),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=(l=Object(f.kea)({actions:function(){return{showAlert:function(e){return{id:e}},hideAlert:function(e){return{id:e}}}},reducers:function(e){var t,n=e.actions;return{visibleAlerts:[{},b.a.object,(t={},u(t,n.showAlert,function(e,t){return d({},e,u({},t.id,!0))}),u(t,n.hideAlert,function(e,t){return d({},e,u({},t.id,!1))}),t)]}},takeEvery:function(e){return u({},e.actions.showAlert,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("showAlert called");case 1:case"end":return e.stop()}},e,this)}))}}))(c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this.actions.showAlert;console.log("mounted"),e("Alert1")}},{key:"render",value:function(){var e=this.actions.showAlert,t=this.props.visibleAlerts;return s.a.createElement("div",null,t.Alert1?"alert1 visible":"",s.a.createElement("button",{onClick:function(){return e("Alert1")},disabled:t.Alert1},"Show Alert1"),s.a.createElement("br",null),t.Alert2?"alert2 visible":"",s.a.createElement("button",{onClick:function(){return e("Alert2")},disabled:t.Alert2},"Show Alert2"))}}]),t}(a.Component))||c}});