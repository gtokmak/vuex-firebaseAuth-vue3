<template>
 <div class="container"> 
  <Navbar></Navbar>
  <RouterView></RouterView>
 </div>
</template>

<script >
import Navbar from './components/Navbar.vue';
export default {
    components: {
    Navbar
  },
  setup() {

  }
}
</script>