/*
* @Author: laihaibo
* @Date:   2016-09-01 22:10:48
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-09-12 21:00:52
*/

'use strict';

// home路由
var Home = Vue.extend({
  template:'#home',
  data:function(){
    return {
      msg:'Hello, Welcome to my website'
    }
  }
})

//个人项目路由
var Project = Vue.extend({
  template:'#project'
})

var Big = Vue.extend({
  template:'#big',
data:function(){
    return {
      msg:'Hello,vue router && material design!',
      bpros:[{
        name:'理财宝',
        adds:'http://123.56.22.119/responsive/',
        sourcecode:'http://123.56.22.119/responsive/'
      },{
        name:'zhihudaily-ionic2',
        adds:'https://github.com/laihaibo/zhihudaily-ionic2'
      },{
        name:'里约奥运会数据分析',
        adds:'http://123.56.22.119/rio_analyze/'
      },
      {
        name:'ha天气',
        adds:'https://github.com/laihaibo/haweather-ionic2',
      },
      {
        name:'Gallery-on-React',
        adds:'http://laihaibo.xyz/gallery-on-react/dist/index.html',
      },      {
        name:'Todos-on-Vue',
        adds:'http://laihaibo.xyz/todos-on-vue/dist/index.html',
        sourcecode:'https://github.com/laihaibo/todos-on-vue'
      }]
    }
  }
})

var Little =Vue.extend({
  template:'#little',
  data:function(){
    return {
      msg:'Hello,vue router && material design!',
      lpros:[{
        name:'倒计时',
        id:'starks-panel',
        adds:'https://github.com/laihaibo/responsive',
        item:['1','2','3','4','5']
      },{
        name:'城市选择',
        id:'lannisters-panel',
        adds:'https://github.com/laihaibo/zhihudaily-ionic2',
        item:['1','2','3','4','5']
      },{
        name:'弹出框',
        id:'targaryens-panel',
        adds:'https://github.com/laihaibo/newerh5',
        item:['1','2','3','4','5']
      },{
        name:'信息滚动条',
        id:'targaryens-panel',
        adds:'https://github.com/laihaibo/newerh5',
        item:['1','2','3','4','5']
      },{
        name:'回到顶部',
        id:'targaryens-panel',
        adds:'https://github.com/laihaibo/newerh5',
        item:['1','2','3','4','5']
      },{
        name:'移动小方块',
        id:'targaryens-panel',
        adds:'https://github.com/laihaibo/newerh5',
        item:['1','2','3','4','5']
      }]
    }
  },
  methods:{
    prevent:function(event){
      event.preventDefault();
    }
  }
})

//鸡汤路由
var Csoup = Vue.extend({
  template: '#csoup'
})

//关于路由
var About = Vue.extend({
  template:'#about'
})

// 路由设置
var router = new VueRouter();

// 映射
router.map({
  '/home':{component:Home},
  '/project':{
    component:Project,
    subRoutes:{
      '/big':{
        component:Big,
        // subRoutes:{
        //   'bdetail/:id':{
        //     name:'bdetail',
        //     component:ProjectDetail
        //   }
        // }
      },
      '/little':{
        component:Little,
        // subRoutes:{
        //   'ldetail/:id':{
        //     name:'ldetail',
        //     component:ProjectDetail
        //   }
        // }
      }
    }
  },
  '/csoup':{component:Csoup},
  '/about':{component:About}
})

// 启动路由
var App=Vue.extend({});
router.start(App,'#app');

// 重定向
router.redirect({
  '/':'/home',
  '/project':'/project/big'
})
