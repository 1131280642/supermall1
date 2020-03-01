<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'//头顶的购物街
  import HomeSwiper from './childComps/HomeSwiper'  //滚动栏
  import RecommendView from './childComps/RecommendView'  //分类栏
  import FeatureView from './childComps/FeatureView'
  import {getHomeMultidata} from 'network/home' //导航栏
  export default {
		name: "Home",
    components: {
		  NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return {
        banners:[],
        recommends:[],
        keywords:[]
      }
    },
    created() {
      getHomeMultidata().then(res =>{
         this.banners = res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    }
	}
</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
    padding-top: 44px;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 6;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
</style>
