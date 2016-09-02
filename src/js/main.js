/*
* @Author: laihaibo
* @Date:   2016-09-01 22:10:48
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-09-02 15:11:18
*/

'use strict';

var Home = Vue.extend({
  template:'#home',
  data:function(){
    return {
      msg:'Hello, Welcome to my website'
    }
  }
})

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
        adds:'https://github.com/laihaibo/responsive'
      },{
        name:'ZhihuDaily',
        adds:'https://github.com/laihaibo/zhihudaily-ionic2'
      },{
        name:'Rio-anylize',
        adds:'https://github.com/laihaibo/newerh5'
      },
      {
        name:'豆瓣热门爬虫',
        adds:'https://github.com/laihaibo/newerh5',
        item:['1','2','3','4','5']
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

// var ProjectDetail=Vue.extend({
//   template:'#projectDetail'
// })

var Csoup = Vue.extend({
  template: '#csoup'
})

var About = Vue.extend({
  template:'#about'
})

// Vue.component('project-detail',{
//   template:'#projectDetail',
//   props:['name','adds'],
//   methods:{
//     prevent:function(event){
//       event.preventDefault();
//     },
//     closeDetail:function(){
//       var dialog = document.querySelector('dialog');
//       dialog.close();
//     }
//   }
// });
// var vm = new Vue({
//   el:'#app'
// })


var router = new VueRouter();

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

var App=Vue.extend({});
router.start(App,'#app');

router.redirect({
  '/':'/home',
  '/project':'/project/big'
})

var dialog = document.querySelector('#xixidialog');
    var showDialogButton = document.querySelector('#xixi');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
