<template>
  <v-container class="pa-0">
    <v-row class="text-center"
           justify="center">
      <v-col v-for="(item,idx) in 12"
             :key="idx"
             class="pb-0">
        <TrainingCard></TrainingCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TrainingCard from "@/components/TrainingCard";

export default {
  name: 'Home',
  components: {
    TrainingCard
  },
  data () {
    return {}
  },
}
</script>
