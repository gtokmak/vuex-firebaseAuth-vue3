<template >
    <div>
        <form @submit.prevent="handleSubmit">
            <h3>Üyü Olma Sayfası</h3>
            <label for="email">Email:</label>
            <input type="email" name="email" v-model="email" required>
            <label for="password">Parola:</label>
            <input type="password" name="password" v-model="password" required>
            <button>Üye Ol!</button>
        </form>
        <div v-if="hata"> {{ hata }}</div>
    </div>
</template>

<script>
    import { ref } from "vue";
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";

export default {
    setup() {
        const store = useStore();
        const email = ref('')
        const password = ref('')
        const hata = ref(null)
        const router = useRouter();
        const handleSubmit=async ()=>{
            //console.log(email.value, password.value)
            const pyload = {email:email.value, password:password.value}
            try {
                await store.dispatch('signup',pyload );
                router.push('/');
            } catch (error) {
                hata.value = error.message;
            }
           
        }
        return { handleSubmit, email, password, hata}
    }
}
</script>
<style>
    
</style>