<template>
    <div v-for="item in list" :key="item.id">

        <img :src="item.goods.pic" alt="" style="width: 100%;height: 300px;">
        <p style="color: green;font-size: 25px;">￥{{ item.goods.amountSingle }}</p>
        <p style="color: #000;">价格<s>{{ item.goods.amountSingle }}</s></p>
        <p>{{ item.goods.goodsName }}</p>
        <p>{{ item.goods.property }}</p>
    </div>
    <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服"/>
        <van-action-bar-icon icon="cart-o" text="购物车" />
        <van-action-bar-icon icon="shop-o" text="店铺" />
        <van-action-bar-button type="danger" text="立即购买" @click="add" />
    </van-action-bar>
</template>
<script lang="ts" setup>
import { querygetdetile,querygetAdd } from '@/axios/api/api';
import { useRoute } from 'vue-router';
import { reactive, ref } from 'vue';
const route = useRoute()
const data = reactive({
    page: 1,
    pageSize: 1
})
const list = ref([

])
const detile = () => {
    querygetdetile({ goodsId: route.query.id, ...data }).then((res: any) => {
        console.log(res.data.data.result);
        // list.value=
        list.value = res.data.data.result
    })
}
// const data1 = reactive({
//     number:1
// })
// const add = () => {
//     querygetAdd({ goodsId: route.query.id, ...data1 }).then((res: any) => {
//         console.log(res);
        
//     })
// }
detile()
</script>
<style lang="scss" scoped>
.van-action-bar{
    // margin-bottom: 1000px;
    position: fixed;
    bottom: 30px;
}
</style>