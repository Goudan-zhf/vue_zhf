<template>
    <div>
        <h3>欢迎来到留言板1.0</h3>
        <hr>
        <input type="text" v-model="msg" placeholder="请先留个言" >
        <br>
        <span id="msg_tip">{{msg_tip}}</span>
        <br>
        <span id="user_tip">{{user_tip}}</span>
        <br>
        <button @click="add_note" >发表留言</button>
        <ul>
            <li v-for="(message,index) in msg_list">{{message}} | <a href="javascript:;" @click="del_msg(index)">删除</a></li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "First",
        data:function () {
            return {
                msg:'',
                user:'',
                msg_tip:'留言不能为空',
                user_tip:'用户名不能为空',
                msg_list:localStorage.msgs?JSON.parse(localStorage.msgs):[],
            }
        },
        methods:{
            add_note(){
                if (this.msg){
                    this.msg_list.push(this.msg);
                    localStorage.msgs=JSON.stringify(this.msg_list);
                    this.msg=''
                }
            },
            del_msg(index){
                let msgs=localStorage.msgs?JSON.parse(localStorage.msgs):[];
                msgs.pop(index);
                localStorage.setItem('msgs',JSON.stringify(msgs));
                location.reload();
            },
        },
    }
</script>

<style scoped>
    span{
        display: none;
    }

</style>
