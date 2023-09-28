<template>
     <nav>
                <h1>Vuex Firebase Auth App</h1>
        <div>
        <router-link to="/">Anasayfa</router-link>
        </div>
        <div>
            <span>Merhaba</span>
            <button @click="handleSignout">Çıkış</button>
        </div>
        <div>
            <router-link to="/login">Giriş</router-link>
            <router-link to="/signup">Üye Ol!</router-link>
        </div>
    </nav>
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup(){
        
        const store = useStore()
        const handleSignout= async()=>{
            store.dispatch('logout')
        }
        return {handleSignout}
    }
}
</script>



