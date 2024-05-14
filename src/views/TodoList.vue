<template>
  <div class="mx-auto m-4" style="width: 80%">
    <div v-if="!showDetail">
      <router-link to="/todo-form" class="btn btn-outline-primary m-4"
        >Creata Todo</router-link
      >

      <div class="container">
        <div class="row">
          <div
            v-for="(todo, index) in todos"
            :key="index"
            class="col-5 m-3 p-2"
            style="border: 1px solid blue"
          >
            <div class="card-body">
              <h5 class="card-title">Title: {{ todo.title }}</h5>
              <p class="card-text">StartDate: {{ todo.startDate }}</p>
              <p class="card-text">DueDate: {{ todo.dueDate }}</p>
              <p class="card-text">
                IsCompleted: {{ todo.isCompleted == true ? "Completed" : "Not Completed" }}
              </p>
              <button
                type="button"
                class="btn btn-primary btn-sm m-1"
                @click="detail(todo.id)"
              >
                Detail
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-sm m-1"
                @click="edit(todo.id)"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger btn-sm m-1"
                @click="deleted(todo.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <TodoDetailComponent :todoId="todoId" />
      <button
        type="button"
        class="btn btn-primary btn-sm mt-2"
        @click="showDetail=false"
      >
        Return List
      </button>
    </div>
  </div>
</template>
<script>
import TodoDetailComponent from "@/components/TodoDetailComponent.vue";

export default {
  components: {
    TodoDetailComponent,
  },
  data() {
    return {
      todos: [],
      todoId: null,
      showDetail: false,
    };
  },
  async mounted() {
    this.getTodoList();
  },

  methods: {
    async getTodoList() {
      const { data } = await this.$axios.get("https://localhost:7056/api/Todos/getList");
      this.todos = data;
    },
    detail(todoId) {
      this.showDetail = true;
      this.todoId = todoId;
    },
    edit(id){
      this.$router.push(`/todo-form?id=${id}`);
    },
    async deleted(id){
      await this.$axios.delete(`https://localhost:7056/api/Todos?id=${id}`);
      this.getTodoList()
    }
  },
};
</script>
