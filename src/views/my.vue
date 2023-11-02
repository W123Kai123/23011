<template>
    <div class="main">
        <div class="top">
            <div class="zhuce">
                <img src="../assets/logo.png" alt="">
                <span>登录/注册</span>
            </div>
        </div>
        <div class="jifen">
            <div class="div">
                <span>--</span>
                <p>积分</p>
            </div>
            <div class="div">
                <span>--</span>
                <p>积分</p>
            </div>
            <div class="div">
                <span>--</span>
                <p>积分</p>
            </div>
        </div>
        <div class="dd">
            <van-cell title="我的订单" is-link value="查看全部订单" />
            <ul>
                <li>
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li>
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li>
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li>
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li>
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
            </ul>
            
        </div>
        <div class="dd">
            <van-cell title="我的订单" is-link value="查看全部订单" />
            <ul >
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
              
            </ul>
            <tab></tab>
        </div>
    </div>
</template>
<script lang="ts" setup>
import tab from '@/components/tab.vue';

</script>
<style scoped lang="scss">
.main {
    background-color: #eee;
    width: 100vw;
    height: 100vh;
}

.top {
    width: 100vw;
    height: 200px;
    background-color: #50a586;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 20px;

    .zhuce {
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
}

.jifen {
    margin: 15px auto;
    border-radius: 10px;
    padding: 15px 0;
    background-color: #fff;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .div {
        text-align: center;
    }
}

.dd {
    width: 90%;
    margin: 0 auto 15px;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    ul{
        width: 100%;
        display: flex;
        align-items: center;
        padding:10px 0 ;
        flex-wrap: wrap;
        border-top: 1px solid #eee;
        li{
            width: 20%;
            text-align: center;
            margin-bottom: 5px;
        }
        .li{
            width: 25%;
            text-align: center;
            margin-bottom: 5px;
        }
    }
}
</style>