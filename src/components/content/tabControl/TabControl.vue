<template>
  <div class="tab-control">
   <div v-for="(item,index) in titles" class="tab-control-item"
   :class="{action:index === currentIndex}" @click="itemcilck(index)">
     <span>{{item}}</span>
   </div>
  </div>
</template>

<script>
  export default{
    name:"TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemcilck(index){
        this.currentIndex=index;
      }
    }
  }
</script>

<style>
  .tab-control{
   display: flex;
   text-align: center;
   font-size: 15px;
   height: 40px;
   line-height: 40px;
   background-color: #FFFFFF;
  }
  .tab-control-item{
    flex: 1;

  }
  .action{
    color: #FF5777;

  }
  .action span{
     border-bottom: 3px solid #FF5777;
     padding: 5px;
  }
</style>
