<script setup>
import CryptoJS from 'crypto-js';
import {ExclamationCircleOutlined} from '@ant-design/icons-vue';
import {createVNode, onMounted} from 'vue';
import {Modal} from 'ant-design-vue';
import {useRouter} from "vue-router";
import {delCookie, getCookie, setCookie} from "../JavaScript/CookieHelper.js";


const router = useRouter ()
const licenseText = "不同意超市里";

const getLicenseHash = () => {
  const hmac = CryptoJS.HmacSHA1 ('some data', licenseText); // Create HMAC with the key
  return hmac.toString (CryptoJS.enc.Hex);
}

const showConfirm = () => {
  Modal.confirm ({
    title: '协议',
    icon: createVNode (ExclamationCircleOutlined),
    content: licenseText,
    onOk () {
      return new Promise ((resolve, reject) => {
        setTimeout (() => {
          setCookie ('agree-misskey-tos', getLicenseHash (), 365, '/')
          resolve (true)
        }, 0);
      }).catch (() => console.log ('Oops errors!'));
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel () {
      delCookie ('agree-misskey-tos');
      router.push ("/")
    },
  });
};

onMounted (() => {
  if (getCookie ("agree-misskey-tos") !== getLicenseHash ()) {
    showConfirm ()
  }
})
</script>

<template>
  <div>
    <a-button @click="showConfirm">Confirm</a-button>
  </div>
</template>

<style lang="scss" scoped>

</style>
