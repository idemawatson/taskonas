<template>
  <v-app dark>
    <v-content>
      <v-container fluid class="center-container">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
<style scoped>
.center-container {
  position: relative;
  text-align: center;
  color: white;
  height: 100%;
  z-index: 0;
  background-size: cover;
  background-image: url('~@/assets/background.png');
}

.center-container::before {
  content: '';
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  background: inherit;
  filter: blur(5px);
  z-index: -1;
}
</style>
