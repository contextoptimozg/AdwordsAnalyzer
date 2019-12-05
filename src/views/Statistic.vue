<template>
    <div class="container">
            <div class="statistic-container">
                <div class="statistic-item">
                    <div class="statistic-header flex-container">
                        <h3 class="company-name">My company</h3>
                        <button class="btn-status btn-ok"></button>
                    </div>
                    <div class="statistic-error-message hidden"></div>
                </div>
                <div class="statistic-item">
                    <div class="statistic-header flex-container">
                        <h3 class="company-name">Company test</h3>
                        <button class="btn-status btn-error" @click="checkError"></button>
                    </div>
                    <div class="statistic-error-message" v-if="viewMessage">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias odio suscipit. At atque, consequuntur culpa dolor dolore doloribus error exercitationem in magni maxime molestias nisi quasi saepe totam unde?
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Statistic",
        data(){
            return{
                viewMessage: false
            }
        },
        methods:{
            checkError(){
                if(this.viewMessage == false){
                    this.viewMessage = true;
                }else{
                    this.viewMessage = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>