import { createRouter, createWebHistory } from "vue-router";
import MemberList from "@/views/MemberList"
import MemberForm from "@/views/MemberForm"
import TodoList from "@/views/TodoList"
import TodoForm from "@/views/TodoForm"
import TeamList from "@/views/TeamList"
import TeamForm from "@/views/TeamForm"
const routes = [
    {
        path: "/member-list",
        component: MemberList,
    },
    {
        path: "/member-form",
        component: MemberForm,
    },
    {
        path: "/todo-list",
        component: TodoList,
    },
    {
        path: "/todo-form",
        component: TodoForm,
    },
    {
        path: "/team-list",
        component: TeamList,
    },
    {
        path: "/team-form",
        component: TeamForm,
    }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;