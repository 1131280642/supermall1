<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-conteol" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'//头顶的购物街
  import HomeSwiper from './childComps/HomeSwiper'  //滚动栏
  import RecommendView from './childComps/RecommendView'  //分类栏
  import FeatureView from './childComps/FeatureView'  //图片
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getHomeMultidata,getHomeGoods} from 'network/home' //滚动条内容推荐商品内容
  export default {
		name: "Home",
    components: {
		  NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page: 0, list:[]},
          'new':{page: 0, list:[]},
          'sell':{page: 0, list:[]}
        }
      }
    },
    created() {
      this.getHomeMultidata()


      this.getHomeGoods('pop')

      this.getHomeGoods('new')

      this.getHomeGoods('sell')
    },
    methods:{
      //请求多个数据
      getHomeMultidata(){
        getHomeMultidata().then(res =>{

          this.banners = res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      //请求商品数据
      getHomeGoods(type){
        const page = this.goods[type].page +1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
        })
      }
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
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
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
