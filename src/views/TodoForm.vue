<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-5">
        <div class="form-group m-2">
          <label for="title">Title</label>
          <input
            v-model="todo.title"
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title"
          />
        </div>

        <div class="form-group m-2">
          <label for="content">Content</label>
          <textarea
            v-model="todo.content"
            type="text"
            class="form-control"
            id="content"
            placeholder="Enter content"
          ></textarea>
        </div>

        <div class="form-group m-2">
          <label for="startdate">StartDate</label>
          <br />
          <input
            v-model="todo.startDate"
            type="date"
            id="startdate"
            name="startdate"
          />
        </div>

        <div class="form-group m-2">
          <label for="duedate">DueDate</label>
          <br />
          <input
            v-model="todo.dueDate"
            type="date"
            id="duedate"
            name="duedate"
          />
        </div>

        <div class="form-group">
          <label for="memberselect">Member select</label>
          <select
            v-model="todo.memberId"
            class="form-control"
            id="memberselect"
          >
            <option>Seçiniz</option>
            <option
              v-for="(member, index) in members"
              :key="index"
              :value="member.id"
            >
              {{ member.name + " " + member.surname }}
            </option>
          </select>
        </div>
        <div class="form-group form-check m-2">
          <input
            v-model="todo.isCompleted"
            type="checkbox"
            class="form-check-input"
            id="isTeamLead"
          />
          <label class="form-check-label" for="isTeamLead"
            >Is Completed?</label
          >
        </div>
        <button type="submit" class="btn btn-primary m-2" @click="submit">
          Submit
        </button>
        <button type="submit" class="btn btn-secondary m-2" @click="cancel">
          Vazgeç
        </button>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: [],
      todoId: null,
      todo: {
        title: null,
        content: null,
        startDate: null,
        dueDate: null,
        memberId: null,
        isCompleted: false
      },
    };
  },
  async mounted() {
    await this.getMembers();
    if (this.$route.query.id) {
      this.todoId = this.$route.query.id;
      this.getByIdTodo(this.todoId);
    }
  },
  methods: {
    async getMembers() {
      const response = await this.$axios.get(
        "https://localhost:7056/api/Members/getList"
      );
      this.members = response.data;
    },
    async submit() {
      if (this.todoId) this.update();
      else this.create();
    },
    async getByIdTodo(todoId) {
      const { data } = await this.$axios.get(
        `https://localhost:7056/api/Todos?id=${todoId}`
      );
      this.todo = data;
      this.todo.startDate = this.dateFormatted(data.startDate);
      this.todo.dueDate = this.dateFormatted(data.dueDate);
    },
    async create() {
      await this.$axios.post("https://localhost:7056/api/Todos", this.todo);
      this.goToList();
    },
    async update() {
      await this.$axios.put("https://localhost:7056/api/Todos", this.todo);
      this.goToList();
    },
    cancel() {
      this.goToList();
    },
    goToList() {
      this.$router.push("/todo-list");
    },
    dateFormatted(date) {
      const originalDate = new Date(date);
      const year = originalDate.getFullYear();
      const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
      const day = originalDate.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate
    },
  },
};
</script>
