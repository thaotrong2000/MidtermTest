<template>
    <div id="dialog" v-show="isShow">
        <div id="dialog-opacity"></div>
        <div id="dialog-content">
            <button @click="closeDialog()">Close</button>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        isShow:{
            type: Boolean, 
            default: true
        }
    }, 
    data(){
        return{
        
        }
    }, 
    methods:{
        closeDialog(){
            this.$emit("closeDialog"); 
        }
    }
}
</script>


<style>
    @import "../../style/layout/css-dialog.css"; 
</style>