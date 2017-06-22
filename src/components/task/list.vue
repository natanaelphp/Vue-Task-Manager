<template>
  <div class="task-list">

    <b-field grouped>
      <p class="control">
        <router-link to="/new" class="button is-success">New task</router-link>
      </p>
      <b-input icon="search" expanded></b-input>
    </b-field>

    <b-table :data="tasks">

      <template scope="task">

        <b-table-column field="title" label="Title" sortable>
          {{ task.row.title }}
          <pre v-show="task.row.open">{{ task.row.description }}</pre>
        </b-table-column>
        <b-table-column label="Operations" width="200">
          <a v-on:click="deleteTask(task.row)"><b-icon icon="delete" class="is-danger option"></b-icon></a>
          <a v-on:click="updateTask(task.index)"><b-icon icon="edit" class="is-warning option"></b-icon></a>
          <a v-on:click="toogleOpen(task.row)"><b-icon icon="list" class="is-default option"></b-icon></a>
          <a v-on:click="toogleDone(task.row)"><b-icon icon="done" class="is-success option"></b-icon></a>
        </b-table-column>

      </template>

    </b-table>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState(['tasks']),
    methods: {
      deleteTask (task) {
        this.$dialog.confirm({
          title: 'Delete task',
          message: 'Are you sure to delete this task? <br><br>' + task.title,
          onConfirm: () => {
            this.$store.commit('DELETE_TASK', task)
            this.$toast.open('Task deleted')
          }
        })
      },

      updateTask (index) {
        this.$router.push('/edit/' + index)
      },

      toogleOpen (task) {
        task.open = !task.open
      },

      toogleDone (task) {
        // TODO: Implement
      }
    }
  }
</script>

<style>
  a {
    color: #000;
  }

  .option {
    margin-left: 16px;
  }
</style>
