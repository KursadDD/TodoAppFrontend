<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/member-list" class="nav-link">Member List</router-link>
      </li>
      <!-- <li class="nav-item active">
        <router-link to="/member-create" class="nav-link">Member Create</router-link>
      </li> -->
      <li class="nav-item">
        <router-link to="/todo-list" class="nav-link">Todo List</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link to="/todo-create" class="nav-link">Todo Create</router-link>
      </li> -->
      <li class="nav-item">
        <router-link to="/team-list" class="nav-link">Team List</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link to="/team-create" class="nav-link">Team Create</router-link>
      </li> -->
    </ul>
  </div>
</nav>
</template>