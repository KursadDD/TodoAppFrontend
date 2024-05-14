<template>
  <div class="mx-auto" style="width: 80%">
    <router-link to="/member-form" class="btn btn-outline-primary m-4"
      >Create Member</router-link
    >
    <table v-if="members.length>0" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">IsTeamLead</th>
          <th scope="col">Team</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, index) in members" :key="index">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.surname }}</td>
          <td>{{ member.eMail }}</td>
          <td>{{ member.isTeamLead }}</td>
          <td>{{ member.team?.name }}</td>
          <td>
            <button
              type="button"
              class="btn btn-secondary btn-sm m-1"
              @click="edit(member.id)"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger btn-sm m-1"
              @click="deleted(member.id)"
            >
              Delete
            </button>
          </td>
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
      const { data } = await this.$axios.get(
        "https://localhost:7056/api/Members/getListWithTeam"
      );
      this.members = data;
    },
    edit(id) {
      this.$router.push(`/member-form?id=${id}`);
    },
    async deleted(id) {
      await this.$axios.delete(`https://localhost:7056/api/Members?id=${id}`);
      this.getMemberList();
    },
  },
};
</script>
