<template>
    <div class="car">
        <van-sidebar v-model="active">
            <van-sidebar-item v-for="item in Tab" :title="item.name">

            </van-sidebar-item>
        </van-sidebar>
        <div class="right">
            <div class="li" v-for="item in list" :key="item.categoryId" >
                <img :src="item.pic" alt="" v-if="item.categoryId==Tab[active].id">
                <p v-if="item.categoryId==Tab[active].id"  style="font-size: 10px;">{{ item.name }}</p>
                <p style="color: green;" v-if="item.categoryId==Tab[active].id">{{ item.originalPrice }}</p>
            </div>
        </div>
    </div>
    <tab></tab>
       
</template>

<script lang="ts" setup>
import  tab  from '../components/tab.vue'; 
import { reactive, ref } from 'vue';
import { querygetcar, querygetcarlist } from '../axios/api/api'
const Tab = ref<any>([])
const active = ref(0);
const list = ref<any>([])
const getTab = () => {
    querygetcar(Tab).then((res: any) => {
        console.log(res.data.data);
        Tab.value = res.data.data
        
    })
}
const data = reactive({
    // categoryId: Tab.value[active.value].id,
    page: 1,
    pageSize: 10
})
const getlist = () => {
    querygetcarlist(data).then((res: any) => {
        console.log(res.data.data.result);
        // console.log(active.value);
        
        list.value = res.data.data.result
    })
}
getTab()
getlist()
</script>
<style lang="scss" scoped>
.car{
    width: 100%;
    display: flex;
    
}
.box1 {
    width: 50%;
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
img{
    width: 80px;
    height: 100px;
}
.right{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>