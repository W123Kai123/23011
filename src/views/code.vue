<template>
    <div class="login">
        <div class="dl">
            <h3>验证码登录</h3>
            <label>为了你的账号安全,请用手机号登录</label>
        </div>

        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="用户名" label="中国 +86" placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请填写手机号' }]" />
                <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
                    <template #button>
                        <van-button size="small" type="default">获取验证码</van-button>
                    </template>
                </van-field>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button block type="success" native-type="submit">
                    确定
                </van-button>
            </div>
        </van-form>
        <div class="zc">
            <div class="left">
                <span @click="$router.push('/login')">验证码登录</span>
            </div>
            <div class="right">
                <span class="mf" @click="$router.push('/register')">免费注册</span>
            </div>
        </div>


        <div class="yue">
            <van-checkbox v-model="checked" checked-color="green">复选框</van-checkbox>阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span> 
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const username = ref('');
const sms = ref('')
const checked = ref(true)
const onSubmit = () => {
    console.log();
};
</script>

<style lang="scss" scoped>
.login {
    widows: 100%;
    height: 100%;
    padding-top: 50px;

    .dl {
        margin-left: 20px;
        margin-bottom: 20px;

        h3 {
            margin-bottom: 10px;
        }
    }
    .van-button{
        width: 80%;
        margin:30px auto;
    }
    .zc{
        width: 80%;
        display: flex;
        margin: auto;
        color: blue;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        .mf{
            margin-left: 20px;

        }
    }
    .yue{
        width: 100%;
        position: fixed;
        bottom: 30px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            color: blue;
        }
    }
}
</style>