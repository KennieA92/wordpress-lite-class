<template>
    <div>

        <v-snackbar v-model="snackbar" top>
            New Post Added
        </v-snackbar>
        <h1>Add New Post</h1>
        <v-btn id="floatyClose" rounded="0" size="large" color="warning" class="bg-green pa-3 my-1"
            @click="$emit('close')">
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card class="ma-5 pa-5">
            <QuillEditor ref="myEditor" v-model:content="addPostInfo.description" class="editor" theme="snow"
                toolbar="full" contentType="html" placeholder="Add content" />
            <v-btn @click="addPost(addPostInfo)">Add Post</v-btn>
        </v-card>

    </div>
</template>

<script setup>

import usePosts from '../modules/usePosts';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const { addPost, myEditor, snackbar, addPostInfo } = usePosts();


</script>

<style lang="scss" scoped>

</style>