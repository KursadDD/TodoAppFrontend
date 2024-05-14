<template>
  <div class="mx-auto" style="width: 80%">
    <div v-if="!showDetail">
      <router-link to="/team-form" class="btn btn-outline-primary m-4"
        >Create Team</router-link
      >
      <table v-if="teams.length>0" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in teams" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ team.name }}</td>
            <td>{{ team.description }}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="detail(team)"
              >
                Detail
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-sm m-1"
                @click="edit(team.id)"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger btn-sm m-1"
                @click="deleted(team.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <TeamDetailComponent :team="team" />
      <button
        type="button"
        class="btn btn-primary btn-sm mt-2"
        @click="showDetail = false"
      >
        Return List
      </button>
    </div>
  </div>
</template>
<script>
import TeamDetailComponent from "@/components/TeamDetailComponent.vue";

export default {
  components: {
    TeamDetailComponent,
  },
  data() {
    return {
      teams: [],
      showDetail: false,
      team: null,
    };
  },
  async mounted() {
    this.getTeamList();
  },

  methods: {
    async getTeamList() {
      const { data } = await this.$axios.get(
        "https://localhost:7056/api/Teams/getList"
      );
      this.teams = data;
    },
    detail(team) {
      this.showDetail = true;
      this.team = team;
    },
    edit(id) {
      this.$router.push(`/team-form?id=${id}`);
    },
    async deleted(id) {
      await this.$axios.delete(`https://localhost:7056/api/Teams?id=${id}`);
      this.getTeamList();
    },
  },
};
</script>
