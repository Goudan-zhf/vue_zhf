<template>
    <div>
        ID:<input type="text" v-model="id"><br>
        用户名：<input type="text" v-model="username"><br>
        生日：<input type="text" v-model="bir"><br>
        个人信息：<input type="text" v-model="info"><br>
        <button @click="addUser">注册用户</button>
        <table>
            <tr>
                <td>ID</td>
                <td>用户名</td>
                <td>生日</td>
                <td>信息</td>
                <td>相关操作</td>
            </tr>
            <tr v-for="message in users ">
                <td>{{message.id}}</td>
                <td>{{message.username}}</td>
                <td>{{message.bir}}</td>
                <td>{{message.info}}</td>
                <td><a href="javascript:;" @click="delUser(index)">删除</a><a href="javascript:;" @click="goInfo(message)">用户详情</a></td>
            </tr>
        </table>
    </div>

</template>

<script>
    export default {
        name: "User",
        data: function () {
            return {
                id: '',
                username: '',
                bir: '',
                info: '',
                users: localStorage.users ? JSON.parse(localStorage.users) : [],
            }

        },
        methods: {
            addUser() {
                let id = this.id;
                let username = this.username;
                let bir = this.bir;
                let info = this.info;
                let user = {'id': id, 'username': username, 'bir': bir, 'info': info};
                this.users.push(user);
                localStorage.users = JSON.stringify(this.users);
                this.username = '';
                this.bir = '';
                this.info = '';
                this.id = '';
            },
            del(index){
                let users = this.users;
                this.users.splice(index, 1);
                this.users = users;
            },
            goInfo(message){
                id=message.id;
                username=message.username;
                bir=message.bir;
                info=message.info;
                this.$router.push({path: "/User_info/id/username/bir/info"})
            }
        }
    }
</script>

<style scoped>
    table {
        border-collapse: collapse;
        border: 2px solid seagreen;
        padding: 2px;
    }


</style>
