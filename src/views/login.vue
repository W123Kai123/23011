<template>
  <h1>账号密码登录</h1>
  <h6 style="color: #eee;font-size: 10px;">为了你的账号安全，请用手机登录</h6>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="reulform.mobile" label="中国+86" placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]" />
      <van-field v-model="reulform.pasword" type="password" placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
  <div class="ii">
    <button @click="$router.push('/code')" style="border: 0;color: steelblue;">验证码登录</button>
    <a href="/wjmm">忘记密码</a>
   <button @click="$router.push('/register')" style="border: 0;color: steelblue;">用户注册</button>
  </div>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue';
import { querLogin } from '@/axios/api/api'
const reulform = reactive({
  mobile: 'mobile',
  pasword: 'pwd',
  deviceId: 16983106199973322818,
  deviceName: 'pc'
})
const onSubmit = () => {
  querLogin(reulform).then((res: any) => {
    console.log(res);

  })
  console.log('submit');
}
</script>
<style lang="scss" scoped>
.ii {
  display: flex;
  justify-content: space-between;
}
</style>
  