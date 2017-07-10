<template>
  <div class="task-list">

    <b-field grouped>
      <p class="control">
        <router-link to="/new" class="button is-success">New task</router-link>
      </p>
      <button class="button is-default" v-on:click="control.showTagFilter = !control.showTagFilter">Tags Filters</button>
      <b-input icon="search" class="option" v-model="filter.search" expanded></b-input>
    </b-field>

    <b-checkbox-group class="control message message-body" v-model="filter.tags" v-show="control.showTagFilter">
      <div class="is-pulled-right">
        <button class="button is-default" v-on:click="filter.tags = tags">Select All</button>
        <button class="button is-default" v-on:click="filter.tags = []">Clear All</button>
      </div>
      <div v-for="tag in tags">
        <b-checkbox :custom-value="tag" :key="tag" style="margin-bottom: 8px">
          <span :class="'tag is-'+tag">{{ tag }}</span>
        </b-checkbox>
      </div>
    </b-checkbox-group>

    <b-table :data="tasksFilteredBySearchAndTags">

      <template scope="task">

        <b-table-column field="title" label="Title" sortable :class="{'text-muted': task.row.done}">
          {{ task.row.title }}
          <div v-show="task.row.open">{{ task.row.description }}</div>
        </b-table-column>
        <b-table-column label="Tags" width="180">
          <span v-for="tag in task.row.tags" :class="'tag is-'+tag" style="margin-right: 4px"></span>
        </b-table-column>
        <b-table-column label="Operations" width="200">
          <a v-on:click="deleteTask(task.row)"><b-icon icon="delete" class="is-danger option"></b-icon></a>
          <a v-on:click="updateTask(task.row)"><b-icon icon="edit" class="is-warning option"></b-icon></a>
          <a v-on:click="toogleOpen(task.row)"><b-icon icon="list" class="is-default option"></b-icon></a>
          <a v-on:click="toogleDone(task.row)"><b-icon icon="done" class="is-success option"></b-icon></a>
        </b-table-column>

      </template>

    </b-table>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { contains } from '@/helpers/strings'
  import { filter, intersection } from 'lodash'

  export default {
    data () {
      return {
        control: {
          showTagFilter: false,
        }
      }
    },
    computed: {
      ...mapState(['tasks', 'filter', 'tags']),

      tasksFilteredBySearch () {
        const byTitleOrDescription = task => contains(task.title + task.description, this.filter.search)
        return filter(this.tasks, byTitleOrDescription)
      },

      tasksFilteredBySearchAndTags () {
        let tasks = this.tasksFilteredBySearch
        const byTags = task => intersection(task.tags, this.filter.tags).length
        return filter(tasks, byTags)
      }
    },
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

      updateTask (task) {
        const index = this.tasks.indexOf(task)
        this.$router.push('/edit/' + index)
      },

      toogleOpen (task) {
        task.open = !task.open
      },

      toogleDone (task) {
        task.done = !task.done
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

  .text-muted {
    text-decoration: line-through;
    color: #c0c0c0;
  }
</style>
