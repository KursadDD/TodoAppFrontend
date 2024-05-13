<template>
  <div class="mx-auto" style="width: 80%;">
    <router-link to="/member-create" class="btn btn-outline-primary m-4">Create Member</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">IsTeamLead</th>
          <th scope="col">Team</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, index) in members" :key="index">
          <td scope="row">{{index+1}}</td>
          <td >{{member.name}}</td>
          <td >{{member.surname}}</td>
          <td >{{member.eMail}}</td>
          <td >{{member.isTeamLead}}</td>
          <td >{{member.team?.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: [],
    };
  },
  async mounted() {
    this.getMemberList();
  },

  methods: {
    async getMemberList() {
      const { data } = await this.$axios.get("api/Members/getListWithTeam");
      this.members = data;
    },
  },
};
</script>
