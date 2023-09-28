<template>
  <div class="home">
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3> {{ blog.title }}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo maxime sequi dicta dolorem corrupti neque facilis voluptas possimus dolores! Aliquam odio autem rerum voluptates nostrum vitae magnam. Dolorem, nisi.</p>
        <div class="icons">
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HomeView',
  setup() {
      const blogs = ref([
        {title:'udem kurs geliştrime zorlukları', id:1},
        {title:'One Price ve Demon Slayer Farkları', id:1},
        {title:'Xamarin Firebase ile uygulama geliştirme', id:1},
      ])

    
    return {
      blogs
    }
  },
}
</script>
