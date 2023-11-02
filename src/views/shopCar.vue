<template>
    <van-empty  />
    <button @click="$router.push('/login')" style="background-color: greenyellow;color: #fff;border: 0;margin-left: 43%;">去登录</button>
    <tab></tab>
</template>
<script lang="ts" setup>
    import tab from '../components/tab.vue'

</script>