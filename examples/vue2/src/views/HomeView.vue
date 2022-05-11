<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="200" height="200" decoding="async">
    <HelloWorld msg="Title"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
