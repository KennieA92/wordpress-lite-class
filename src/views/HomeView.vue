<template>
  <h1>Add Post</h1>
  <v-form>
    <v-text-field color="secondary" label="Title" solo placeholder="Enter a title" v-model="addPostInfo.title">
    </v-text-field>
    <v-text-field color="secondary" label="Description" solo placeholder="Enter a title"
      v-model="addPostInfo.description">


    </v-text-field>
  </v-form>
  <v-btn @click="addPost(addPostInfo)">Add Post</v-btn>
  <v-card class="ma-5 pa-5" v-for="post in posts" :key="post.id">
    <h1>{{ post.title }}</h1>
    <h1><span v-html="post.description"></span></h1>
    <v-btn @click="deletePost(post.id)">delete</v-btn>
    <v-btn @click="updatePost(post.id)">update</v-btn>
  </v-card>
</template>

<script setup>
import { onMounted } from 'vue';
// Components
import usePosts from '../modules/usePosts';




const { posts, getPostsData, deletePost, addPost, updatePost, addPostInfo } = usePosts();

/*const querySnapshot = await getDocs(collection(db, "posts"));  */

onMounted(() => {
  getPostsData();
})


/* querySnapshot.forEach((doc) => {
  posts.value.push({
    ...doc.data(), id: doc.id
  })

  console.log(doc.id, " => ", doc.data());
}); */




</script>