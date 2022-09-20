<template>
  <div class="about">


    <v-btn class="bg-green-lighten-3" @click="isOpen = true">Add New Post</v-btn>
    <teleport to="body">
      <transition name="slide-fade">
        <div class="modal" v-if="isOpen">
          <NewPostView @close="isOpen = false"></NewPostView>
        </div>
      </transition>
    </teleport>
  </div>
</template>


<script setup>
import NewPostView from './NewPostView.vue';
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style scoped lang="scss">
.root {
  position: relative;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.modal>div {
  background-color: #efefef;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 95%;
}

#floatyClose {
  position: fixed;
  top: 96px;
  left: -5px;
  z-index: 9999;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>