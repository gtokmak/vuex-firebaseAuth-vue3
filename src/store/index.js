import { createStore } from 'vuex'
import { auth } from '@/firebase/config';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth'

export default createStore({
  state: {
    kullanici: null
  },
  getters: {
  },
  mutations: {
    kullaniciDegistir(state, payload){
      state.kullanici = payload;
      console.log("kullanici degisti", state.kullanici);
    }
  },
  actions: {
   async signup(contex, payload){
      const res = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      if (res) {
        contex.commit('kullaniciDegistir',res.user)
      } else {
       throw new Error('Kullanıcı oluşturulamadı.')
      }
   },
   async login(contex, payload){
    const res =await signInWithEmailAndPassword(auth, payload.email, payload.password);
      if (res) {
        contex.commit('kullaniciDegistir', res.user)
      } else {
          throw new Error('Oturum açma hatası.')
      }
   },
   async logout(contex){
      await signOut(auth);
      contex.commit('kullaniciDegistir', null)
   }
  }, 
  modules: {
  }
})
