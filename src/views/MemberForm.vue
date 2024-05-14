<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-5">
        <div class="form-group m-2">
          <label for="name">Name</label>
          <input
            v-model="member.name"
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group m-2">
          <label for="surname">Surname</label>
          <input
            v-model="member.surname"
            type="text"
            class="form-control"
            id="surname"
            placeholder="Enter surname"
          />
        </div>
        <div class="form-group m-2">
          <label for="exampleInputEmail">Email address</label>
          <input
            v-model="member.eMail"
            type="email"
            class="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div class="form-group">
          <label for="teamselect">Team select</label>
          <select
            v-model="member.teamId"
            class="form-control"
            id="teamselect"
          >
            <option>Seçiniz</option>
            <option
              v-for="(team, index) in teams"
              :key="index"
              :value="team.id"
            >
              {{ team.name }}
            </option>
          </select>
        </div>
        <div class="form-group form-check m-2">
          <input
            v-model="member.isTeamLead"
            type="checkbox"
            class="form-check-input"
            id="isTeamLead"
          />
          <label class="form-check-label" for="isTeamLead"
            >Is Team Lead?</label
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
      teams: [],
      memberId: null,
      member: {
        name: null,
        surname: null,
        eMail: null,
        teamId: null,
        isTeamLead: false,
      },
    };
  },
  async mounted() {
    await this.getTeams();
    if (this.$route.query.id) {
      this.memberId = this.$route.query.id;
      this.getByIdMember(this.memberId);
    }
  },
  methods: {
    async getTeams() {
      const { data } = await this.$axios.get(
        "https://localhost:7056/api/Teams/getList"
      );
      this.teams = data;
    },
    async submit() {
      if (this.memberId) this.update();
      else this.create();
    },
    async getByIdMember(memberId) {
      const { data } = await this.$axios.get(
        `https://localhost:7056/api/Members?id=${memberId}`
      );
      this.member = data;
    },
    async create() {
      await this.$axios.post("https://localhost:7056/api/Members", this.member);
      this.goToList();
    },
    async update() {
      await this.$axios.put("https://localhost:7056/api/Members", this.member);
      this.goToList();
    },
    cancel() {
      this.goToList();
    },
    goToList() {
      this.$router.push("/member-list");
    },
  },
};
</script>
