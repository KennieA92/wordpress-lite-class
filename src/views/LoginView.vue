<template>
    <div class="m-5">
        <h1>Login</h1>
        <v-form>
            <v-text-field color="secondary" label="Email" solo placeholder="Enter a title" v-model="email">
            </v-text-field>
            <v-text-field color="secondary" label="Password" solo placeholder="Enter a title" v-model="password">
            </v-text-field>
        </v-form>
        <v-btn color="primary" @click.prevent="login()">Login</v-btn>
        <v-btn color="primary" @click.prevent="logout()">Logout</v-btn>
    </div>
</template>

<script setup>
import useUsers from '../modules/useUsers';

const { login, logout, email, password } = useUsers()



</script>

<style lang="scss" scoped>

</style>