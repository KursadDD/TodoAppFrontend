<template>
    <div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-5">
            <div class="form-group m-2">
                <label for="name">Name</label>
                <input  v-model="team.name" type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name">
            </div>

            <div class="form-group  m-2">
                <label for="surname">Description</label>
                <textarea  v-model="team.description" type="text" class="form-control" id="surname" aria-describedby="emailHelp" placeholder="Enter surname"></textarea>
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
        team:{
            name:null,
            description:null,
        }
    }
},
async mounted(){
},

methods:{
    async submit(){
        await this.$axios.post('api/teams', this.team);
        this.goToList()
    },
    cancel(){
        this.goToList()
    },
    goToList(){
        this.$router.push("/team-list")
    }
}

}
</script>
