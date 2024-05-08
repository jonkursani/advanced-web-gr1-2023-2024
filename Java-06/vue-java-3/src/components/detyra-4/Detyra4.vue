<script setup>
import ActiveUser from "@/components/detyra-4/ActiveUser.vue";
import UserData from "@/components/detyra-4/UserData.vue";
import {reactive} from "vue";

const user = reactive({
  username: 'Filan',
  age: 20
})

function handleClick(userInfo) {
  // console.log(userInfo);
  user.username = userInfo.username;
  user.age = userInfo.age;
}
</script>

<template>
<!--  <ActiveUser age="" username="" />-->
<!--  <UserData />-->
  <active-user :age="user.age" :username="user.username" />
  <user-data @handleClick="handleClick" />
</template>

<style scoped></style>