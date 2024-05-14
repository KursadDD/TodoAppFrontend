<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-5">
        <div class="form-group m-2">
          <label for="name">Name</label>
          <input
            v-model="team.name"
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
        </div>

        <div class="form-group m-2">
          <label for="description">Description</label>
          <textarea
            v-model="team.description"
            type="text"
            class="form-control"
            id="description"
            placeholder="Enter description"
          ></textarea>
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
      teamId: null,
      team: {
        name: null,
        description: null,
      },
    };
  },
  async mounted() {
    if (this.$route.query.id) {
      this.teamId = this.$route.query.id;
      this.getByIdTeam(this.teamId);
    }
  },
  methods: {
    async getByIdTeam(teamId) {
      const { data } = await this.$axios.get(
        `https://localhost:7056/api/Teams?id=${teamId}`
      );
      this.team = data;
    },
    async submit() {
      if (this.teamId) this.update();
      else this.create();
    },
    async create() {
      await this.$axios.post("https://localhost:7056/api/Teams", this.team);
      this.goToList();
    },
    async update() {
      await this.$axios.put("https://localhost:7056/api/Teams", this.team);
      this.goToList();
    },
    cancel() {
      this.goToList();
    },
    goToList() {
      this.$router.push("/team-list");
    },
  },
};
</script>
