<template>
    <main class="container flex-container">
       <div class="sidebar" v-if="isHeader">
               <div class="logo sidebar-padding">
                   <a href="https://optimozg.com/"><img src="../assets/logo.png" alt="logo" class="logo-img"></a>
               </div>
               <div class="user-container sidebar-padding">
                   <div class="avatar">
                       <img src="../assets/avatar.png" alt="avatar">
                   </div>
                   <div class="user-email">optimozg@optimozg.com</div>
                   <button class="sign-out"><span class="fa fa-sign-out"></span>Выйти</button>
               </div>
               <ul class="nav sidebar-padding">
                   <li class="nav-item hidden"><router-link to="/signin" tag="a">SignIn</router-link></li>
                   <li class="nav-item hidden"><router-link to="/notfound" tag="a">NotFound</router-link></li>
                   <li class="nav-item"><router-link to="/settings" tag="a">Настройки</router-link></li>
                   <li class="nav-item"><router-link to="/statistic" tag="a">Статистика</router-link></li>
               </ul>
       </div>
        <div id="main" class="container">
            <router-view/>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                currentUrl: this.$route.fullPath,
                isHeader: true
            }
        },
        created(){
            if(this.currentUrl == '/404' || this.currentUrl == '/signin'){
                this.isHeader = false;
            }else{
                this.isHeader = true;
            }
        }
    }
</script>

<style scoped>

</style>