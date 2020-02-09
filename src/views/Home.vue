<template>
   <v-row no-gutters class="home-page">
      <v-col
        md="6"
        offset-md="3"
        sm="8"
        offset-sm="2"
      >
    <div class="page-header">
      <h1>All Garage Sales</h1>
      <v-btn> Create New </v-btn>
    </div>

    <div class="garage-list">
     <v-card
    outlined
  >
    <v-card-title class="headline"> My Garage Sale </v-card-title>
     <v-card-subtitle> Description </v-card-subtitle>
    </v-card>
    </div>

      </v-col>
   </v-row>
</template>

<script>
export default {
  name: 'Home'
}
</script>
