<template>
  <div class="signin-container container">
    <button class="btn-submit signin" @click="loginSubmit">Авторизироваться через Google</button>
    <p class="error-sign" v-if="isError">Houston, we have a problem</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import { GoogleAdsApi } from 'google-ads-api'
export default {
  name: 'signin',
  data(){
    return{
      isError: false
    }
  },
  computed: {
    checkLoginIn(){
      return this.$store.state.isLogin
    }
  },
  methods:{
    loginSubmit(){
      this.$gAuth.signIn()
              .then(GoogleUser => {
                // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
                console.log(GoogleUser);
                // const client = new GoogleAdsApi({
                //   client_id: '745288766308-qj69ueokmpap95s1itb0undjshu9jl52.apps.googleusercontent.com',
                //   client_secret: 'ghuHPRix_b7vaPuVzgqzDWou',
                //   developer_token: 'QCLiTiMKk0zb2oV0wEyuYg',
                // });
                // console.log(client);
                //let checkAdwords = GoogleUser.Zi.scope.test()
                // GoogleUser.getId() : Get the user's unique ID string.
                // GoogleUser.getBasicProfile() : Get the user's basic profile information.
                // GoogleUser.getAuthResponse() : Get the response object from the user's auth session. access_token and so on
                this.$store.dispatch('LoginIn');
              })
              .catch(error  => {
                console.log(error);
                this.isError = true;
              })
    }
  }
}
</script>
