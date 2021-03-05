<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <router-view :name="viewname" v-slot="{Component, route}">
    <transition 
      :name="route.meta.transition || 'fade'"
      mode="outin"
      @before-enter="flushWaiter"
      @before-leave="setupWaiter"
    >
      <keep-alive>
        <component 
          :is="Component" 
          :key="route.name === 'repeat' ? route.path : undefined">
        </component>
      </keep-alive>

    </transition>
  </router-view>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component'
import { useRoute } from 'vue-router'
// import { computed, inject, ref } from '__VLS_vue'
import HelloWorld from './components/HelloWorld.vue'


@Options( {
  name: "App",
  components: {
    HelloWorld
  }, 
  setup() {
    const route = useRoute()
    const state = inject('state')
    const viewName = ref('default')

    const currentLocation = computed(() => {
      const {matched, ...rest} = route
      return rest
    })

    function flushWaiter() {
      return 0
    }

    function setupWaiter() {
      return 1
    }
    return {
      currentLocation,
      state,
      flushWaiter,
      setupWaiter,
      viewName,
    }
    
  }
})
export default class App extends Vue {
  msg: number = 123

  helloMsg: string = 'hello world'

  mounted() {
    this.greet()
  }

  get computedMsg() {
    return `computed ${this.msg}`
  }

  greet() {
    alert(`greeting ${this.msg}`)
  }
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>