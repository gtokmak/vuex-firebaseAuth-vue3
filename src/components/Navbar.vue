<template>
     <nav>
                <h1>Vuex Firebase Auth App</h1>
        <div>
        <router-link to="/">Anasayfa</router-link>
        </div>
        <div>
            <span v-if="kullanici">Merhaba {{ kullanici.email }}</span>
            <span v-if="!kullanici">Merhaba</span>
            <button @click="handleSignout" v-if="kullanici"> Çıkış</button>
        </div>
        <div>
            <router-link v-if="!kullanici" to="/login">Giriş</router-link>
            <router-link v-if="!kullanici" to="/signup">Üye Ol!</router-link>
        </div>
    </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup(){
        const kullanici = computed(()=> store.state.kullanici)
        const store = useStore()
        const handleSignout= async()=>{
            store.dispatch('logout')
        }
        return {handleSignout, kullanici}
    }
}
</script>



