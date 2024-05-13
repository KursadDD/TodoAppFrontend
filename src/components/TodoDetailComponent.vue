<template>
  <div>
    <div v-if="todoDetail" class="card-body">
      <h5 class="card-title">Title: {{ todoDetail.title }}</h5>
      <p class="card-text">Start Date: {{ todoDetail.startDate }}</p>
      <p class="card-text">Due Date: {{ todoDetail.dueDate }}</p>
      <p class="card-text">Content: {{ todoDetail.content }}</p>
      <p v-if="todoDetail.member" class="card-text">Member: {{ todoDetail.member?.name+' '+ todoDetail.member?.surname }}</p>
      <p v-if="todoDetail.member?.team" class="card-text">Team: {{ todoDetail.member?.team?.name }}</p>
      <p class="card-text">
        IsCompleted: {{ todoDetail.isCompleted == true ? 'Completed': 'Not Completed'}}
      </p>
      <p v-if="todoDetail.isCompleted" class="card-text">
        Comlated Date: {{ todoDetail.comlatedDate}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoDetailComponent",
  props: {
    todoId: Number,
  },
  data(){
    return {    
        todoDetail: null
    }
  },
  async mounted() {
    const { data } = await this.$axios.get(`api/Todos/getByIdWithMember?id=${this.todoId}`);
    this.todoDetail = data
  },
};
</script>
