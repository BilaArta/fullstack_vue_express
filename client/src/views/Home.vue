<template>
  <v-app>
    <v-list disabled>
      <v-subheader>dataset</v-subheader>
      <v-list-item-group

        color="primary"
      >
        <v-list-item
          v-for="(data, index) in datas"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title v-text="data.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import UsersApi  from "@/plugins/api.js" 

export default {
  name: 'Home',
  data : () =>({
    datas: []
  }),
  async created() {
    try {
      this.datas = await UsersApi.getUsers()
    } catch (error) {
      this.datas = error
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
