<template>
    <div v-if="isLoggedIn">
        only show if user is logged in
        <v-btn @click="logout()">
            Logout
        </v-btn>
    </div>
    <div v-else>
        <h1>hello</h1>
    </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import useUsers from '../modules/useUsers';
const { isLoggedIn, logout, isLoggedInTest } = useUsers()

onMounted(() => {
    isLoggedInTest();
})

//const user = localStorage.getItem('userLoginInfoFireBase');
//console.log("userLoginInfoFireBase: " + localStorage.getItem('userLoginInfoFireBase'));
</script>

<style lang="scss" scoped>

</style>