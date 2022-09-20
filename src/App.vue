<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail permanent>
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Groot Mc Adams"
            subtitle="GrootMcAdams@gmailcom"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-star" title="Home" value="myfiles"></v-list-item>
          </router-link>
          <router-link to="about">
            <v-list-item prepend-icon="mdi-account-multiple" title="Shingle Posts" value="edit"></v-list-item>
          </router-link>
          <router-link to="editPost">
            <v-list-item prepend-icon="mdi-pencil-outline" title="Edit Posts" value="shared"></v-list-item>
          </router-link>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <Suspense>
          <router-view></router-view>
        </Suspense>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
.v-main {
  min-height: 100vh;
}
</style>