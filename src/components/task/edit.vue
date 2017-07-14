<template>
  <div class="edit-task">

    <router-link to="/" class="button">Back</router-link>
    <hr>
    <form v-on:submit.prevent="save(task)">
      <b-field>
        <b-input placeholder="Title" minlength="3" v-model="task.title"></b-input>
      </b-field>
      <b-field>
        <b-input type="textarea" minlength="3" maxlength="1000" placeholder="Description" v-model="task.description"></b-input>
      </b-field>
      <b-checkbox-group class="control message message-body" v-model="task.tags">
        <b-checkbox :custom-value="tag" :key="tag" v-for="tag in tags" style="margin-right: 14px">
          <span :class="'tag is-'+tag">{{ tag }}</span>
        </b-checkbox>
      </b-checkbox-group>
      <input type="submit" class="button is-warning is-fullwidth" value="Edit task">
    </form>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        task: {
          title: '',
          description: '',
          open: false,
          done: false,
          tags: [],
        }
      }
    },
    computed: mapState(['tags']),
    mounted () {
        const id = this.$route.params.id
        this.task = this.$store.state.tasks[id]
    },
    methods: {
      save(task) {
        this.$store.commit('EDIT_TASK', task)
        this.$router.push('/')
      }
    }
  }
</script>
