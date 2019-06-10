'use strict';
Package('org.quickcorp.amp.controllers',[
  Class('AMPController',Object,{
    component:null,
    _new_:function (o){
      logger.debug('AMPController Element Initialized');
      this.component = o.component;
    },
    done: function (){
      document.head.innerHTML+=this.component.body.innerHTML;
      this.component.body.innerHTML="";
    }
  }),
  Class('SideNavController',Object,{
    dependencies:[],
    component:null,
    visibility:false,
    effect:null,
    close: function (){
      this.component.body.innerHTML='';
      this.component.rebuild();
      Tag('.i-amphtml-sidebar-mask').map(element=>{
        element.style.opacity=0;
      });
    },
    _new_:function (o){
        this.__new__(o);
        var controller = this;
        global.sideNavController = controller;
    },
    done: function (){
    }
  })

]);
