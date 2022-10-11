<template >
    <div v-if="isLoggedIn">
        <h1>Add Post</h1>
        <v-card class="bg-teal-lighten-5 pa-5 text-grey-darken-4">
            <h3 class="text-grey-darken-2 py-1">New post:</h3>

            <QuillEditor toolbar="full" theme="snow" v-model:content="addPostInfo.description"
                placeholder="Enter content" contentType="html" ref="myEditor" />

            <!--   -->
            <v-btn class="bg-green-lighten-3" @click="addPost(addPostInfo)">Add Dynamic Item</v-btn>
        </v-card>
        <v-card class="ma-5 pa-5" v-for="post in posts" :key="post.id">
            <h5>Item ID: {{post.id}}</h5>
            <QuillEditor v-model:content="post.description" class="editor" theme="snow" toolbar="full"
                contentType="html" />
            <v-btn @click="deletePost(post.id)">delete</v-btn>
            <v-btn @click="updatePost(post)">update</v-btn>
        </v-card>
    </div>
    <div v-else></div>
</template>
  
<script setup>
import { onMounted } from 'vue';
// Components
import usePosts from '../modules/usePosts';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import useUsers from '@/modules/useUsers';

const { posts, myEditor, getPostsData, deletePost, addPost, updatePost, addPostInfo } = usePosts();
const { isLoggedIn, isLoggedInTest } = useUsers();

/*const querySnapshot = await getDocs(collection(db, "posts"));  */

onMounted(() => {
    getPostsData();
    isLoggedInTest();
})

/* querySnapshot.forEach((doc) => {
  posts.value.push({
    ...doc.data(), id: doc.id
  })
 
  console.log(doc.id, " => ", doc.data());
}); */




</script>
  
<style lang="scss">

</style>