import { createRouter, createWebHistory } from "vue-router";
import MemberList from "@/views/MemberList"
import MemberCreate from "@/views/MemberCreate"
import TodoList from "@/views/TodoList"
import TodoCreate from "@/views/TodoCreate"
import TeamList from "@/views/TeamList"
import TeamCreate from "@/views/TeamCreate"

const routes = [
    {
        path: "/member-list",
        component: MemberList,
    },
    {
        path: "/member-create",
        component: MemberCreate,
    },
    {
        path: "/todo-list",
        component: TodoList,
    },
    {
        path: "/todo-create",
        component: TodoCreate,
    },
    {
        path: "/team-list",
        component: TeamList,
    },
    {
        path: "/team-create",
        component: TeamCreate,
    }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;