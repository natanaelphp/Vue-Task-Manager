<template>
  <div class="new-task">

    <router-link to="/" class="button">Back</router-link>
    <hr>
    <b-field>
      <b-input placeholder="Title" minlength="3" v-model="task.title"></b-input>
    </b-field>
    <b-field>
      <b-input type="textarea" minlength="3" maxlength="1000" placeholder="Description" v-model="task.description"></b-input>
    </b-field>
    <button class="button is-primary is-fullwidth" v-on:click="save(task)">
      Create new task
    </button>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        task: {
          title: '',
          description: '',
        }
      }
    },
    methods: {
      save(task) {
        console.log(task);
      }
    }
  }
</script>
