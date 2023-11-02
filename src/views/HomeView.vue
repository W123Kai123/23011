<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in baner" :key="item.id">
            <img :src="item.picUrl" alt="" style="width: 100%;">
        </van-swipe-item>
    </van-swipe>
    <h2 align="center">商品列表</h2>
    <div class="box1">
        <div class="box" v-for="item in list" :key="item.id" @click="goto(item.id)">
            <img :src="item.pic" alt="" style="width: 100%;height: 100px;">
            <p>{{ item.name }}</p>
            <sapn style="color: green;font-size: 14px;">￥{{ item.minPrice }}</sapn><s style="font-size: 14px;">￥{{ item.originalPrice }}</s>
            <button style="border: 1px solid green;width: 60px;float: right;color: green;">购买</button>
        </div>
    </div>
    <tab></tab>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import  tab  from '../components/tab.vue';
import { useRouter } from 'vue-router';
import { queryBaner, querygetList } from '../axios/api/api'
const Baner = ref<any>('indexBanner')
const router = useRouter()
const baner = ref<any>([])
const list = ref<any>([])
const getBaner = () => {
    queryBaner(Baner).then((res: any) => {
        // console.log(res.data.data);
        baner.value = res.data.data
    })
}
const data = reactive({
    page: 1,
    pageSize: 10
})

const getList = () => {
    querygetList(data).then((res: any) => {
        console.log(res.data.data.result);
        list.value = res.data.data.result
    })
}
const goto = (id:number) => {
    console.log(id);
    
    router.push({
        path: '/detile',
        query: {
            id:id
        }
    })
}
getBaner()
getList()
</script>
<style lang="scss" scoped>
.van-swipe {
    width: 100%;
}

.box1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .box {
        margin-top: 50px;
        width: 40%;
        // height: 140px;
        border: 1px solid #eee;
    }

    p {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}
</style>