<template >
    <div>
        <form @submit.prevent="handleSubmit">
            <h3>Giriş Sayfası</h3>
            <label for="email">Email:</label>
            <input type="email" name="email" v-model="email" required>
            <label for="password">Parola:</label>
            <input type="password" name="password" v-model="password" required>
            <button>Giriş</button>
        </form>
        <div> {{ hata }}</div>
    </div>
</template>

<script>

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
    

export default {
    setup() {
        const router = useRouter();
        const store = useStore();
        const email = ref('')
        const password = ref('')
        const hata = ref(null)
        const handleSubmit=async()=>{
            const pyload = { email:email.value, password:password.value}
            try {
                await store.dispatch('login', pyload)
                router.push('/')
            } catch (error) {
                hata = error.message;
            }
        }
        return { handleSubmit, email, password, hata}
    }
}
</script>
<style>
    
</style>