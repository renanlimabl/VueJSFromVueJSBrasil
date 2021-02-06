<template>
  <custom-header @create-account="handleAccountCreate" @login="handleLogin" />
  <contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">FeedBacker © 2021</p>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Contact from './Contact.vue';
import CustomHeader from './CustomHeader.vue';

export default {
  components: {
    Contact,
    CustomHeader,
  },
  setup() {
    const router = useRouter();

    /**
     * Qnd for montado, verificamos se já tem o token, caso sim,
     * fazemos o redirect para feedbacks (passando o name :O)
     */
    onMounted(() => {
      const token = window.localStorage.getItem('token');
      if (token) {
        router.push({ name: 'Feedbacks' });
      }
    });

    function handleLogin() {}

    function handleAccountCreate() {}

    return {
      handleLogin,
      handleAccountCreate,
    };
  },
};
</script>

Contact
