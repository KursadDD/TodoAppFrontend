<template>
  <div class="m-3">
    <div class="card-body">
      <h5 class="card-title">Name: {{ team.name }}</h5>
      <p class="card-text mt-3">Description: {{ team.description }}</p>
      <p class="card-text">Created Date: {{ team.createdDate }}</p>

      <table v-if="teamMembers" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Is TeamLead</th>
            <th scope="col">Created Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in teamMembers" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.surname }}</td>
            <td>{{ member.isTeamLead }}</td>
            <td>{{ member.createdDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeamDetailComponent",
  props: {
    team: Object,
  },
  data() {
    return {
      teamMembers: null,
    };
  },
  async mounted() {
    const { data } = await this.$axios.get(
      `https://localhost:7056/api/Members/getListByTeamId?id=${this.team.id}`
    );
    this.teamMembers = data;
  },
};
</script>
