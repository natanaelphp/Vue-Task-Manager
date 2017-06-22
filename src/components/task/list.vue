<template>
  <div class="task-list">

    <b-field grouped>
      <p class="control">
        <router-link to="/new" class="button is-success">New task</router-link>
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
          <router-link :to="'/edit/'+tasks.index"><b-icon icon="edit" class="is-warning option"></b-icon></router-link>
          <a v-on:click="tasks.row.open = !tasks.row.open"><b-icon icon="list" class="is-default option"></b-icon></a>
          <router-link to="/"><b-icon icon="done" class="is-success option"></b-icon></router-link>
        </b-table-column>

      </template>

    </b-table>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState(['tasks'])
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
