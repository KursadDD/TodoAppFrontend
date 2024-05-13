<template>
    <div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-5">
            <div class="form-group m-2">
                <label for="title">Title</label>
                <input  v-model="todo.title" type="text" class="form-control" id="title" placeholder="Enter title">
            </div>

            <div class="form-group  m-2">
                <label for="surname">Content</label>
                <textarea  v-model="todo.content" type="text" class="form-control" id="surname" placeholder="Enter content"></textarea>
            </div>

            <div class="form-group  m-2">
                <label for="startdate">StartDate</label>
                <br>
                <input v-model="todo.startDate" type="date" id="startdate" name="startdate">
            </div>

            <div class="form-group  m-2">
                <label for="duedate">DueDate</label>
                <br>
                <input v-model="todo.dueDate" type="date" id="duedate" name="duedate">
            </div>

             <div class="form-group">
                    <label for="exampleFormControlSelect1">Member select</label>
                    <select  v-model="todo.memberId" class="form-control" id="exampleFormControlSelect1">
                    <option>Seçiniz</option>
                    <option 
                        v-for="(member, index) in members" 
                        :key="index"
                        :value="member.id"
                        >
                        {{member.name+" "+member.surname}}
                    </option>
                    </select>
              </div>

            <button type="submit" class="btn btn-primary m-2" @click="submit">Submit</button>
            <button type="submit" class="btn btn-secondary m-2" @click="cancel">Vazgeç</button>
        </div>
        <div class="col-3"></div>
    </div>
   </div>
</template>
<script>
export default{
    
data(){
    return{
        members:[],
        todo:{
            title:null,
            content:null,
            startDate:null,
            dueDate:null,
            memberId:null
        }
    }
},
async mounted(){
    await this.getMembers()
},
methods:{
    async getMembers(){
        const response = await this.$axios.get('api/Members/getList');
        this.members = response.data
    },
    async submit(){
        await this.$axios.post('/api/Todos', this.todo);
        this.goToList()
    },  
    cancel(){
        this.goToList()
    },
    goToList(){
        this.$router.push("/todo-list")
    }
}

}
</script>
