<template>
  <nav class="navbar navbar-expand-lg navbar-light d-flex">
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item m-3">
          <router-link to="/member-list" class="nav-link">
            <button type="button" class="btn btn-outline-primary">
              Member List
            </button>
          </router-link>
        </li>

        <li class="nav-item m-3">
          <router-link to="/todo-list" class="nav-link">
            <button type="button" class="btn btn-outline-primary">
              Todo List
            </button>
          </router-link>
        </li>

        <li class="nav-item m-3">
          <router-link to="/team-list" class="nav-link"
            ><button type="button" class="btn btn-outline-primary">
              Team List
            </button></router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
