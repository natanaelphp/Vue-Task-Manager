<template>
  <div class="task-list">

    <b-field grouped>
      <p class="control">
        <button class="button is-success">New task</button>
      </p>
      <b-input icon="search" expanded></b-input>
    </b-field>

    <b-table :data="tasks">

      <template scope="tasks">

        <b-table-column field="title" label="Title" sortable>
          {{ tasks.row.title }}
          <pre v-show="tasks.row.open">{{ tasks.row.description }}</pre>
        </b-table-column>
        <b-table-column label="Operations" width="200">
          <router-link to="/"><b-icon icon="delete" class="is-danger option"></b-icon></router-link>
          <router-link to="/"><b-icon icon="edit" class="is-warning option"></b-icon></router-link>
          <a v-on:click="tasks.row.open = !tasks.row.open"><b-icon icon="list" class="is-default option"></b-icon></a>
          <router-link to="/"><b-icon icon="done" class="is-success option"></b-icon></router-link>
        </b-table-column>

      </template>

    </b-table>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        tasks: [
          {'id':1, title: 'Task 2', description: 'Test', open: false},
          {'id':2, title: 'Task 3', description: 'Loren asidjasda sda sda sda sd ', open: false},
          {'id':3, title: 'Task 4', description: 'Test', open: false},
          {'id':4, title: 'Task', description: 'Test', open: false},
          {'id':5, title: 'Task', description: 'Test', open: false},
        ]
      }
    }
  }
</script>

<style>
  .task-list {
    margin: 4% 4%;
  }
  @media (min-width: 500px) {
    .task-list {
      margin: 5% 15%;
    }
  }

  a {
    color: #000;
  }

  .option {
    margin-left: 16px;
  }
</style>
