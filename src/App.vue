<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon button" v-on:click.native="toggleSideNav">
        <md-icon>menu</md-icon>
      </md-button>

      <h1 class="md-title">{{ title }}</h1>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSideNav">
      <md-toolbar class="md-medium">
        <div class="md-toolbar-container">
          <h2 class="md-title">Sidenav Content</h2>
        </div>
      <md-toolbar>

      <p>ADUHAsudhash aushd uashdu hasudh aushduashduahsudhasuhdaush duash udhasu dhasuhd uashdu ahsudhas udhas</p>

    </md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'WebschoolComponent',
  data () {
    return {
      title: 'Ecommerce VueJS'
    }
  },
  methods: {
    toggleSideNav () {
      this.$refs.leftSideNav.toggle()
    }
  }
}
</script>

<style>
</style>
