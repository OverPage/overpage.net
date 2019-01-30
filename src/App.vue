<template>
  <v-app>
    <v-content>
      <About/>
      <Inquiry/>
    </v-content>
  </v-app>
</template>

<script>
import About from "./components/About";
import Inquiry from "./components/Inquiry";

export default {
  name: "App",
  components: {
    About,
    Inquiry
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
body {
  background: #eceff1;
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
@media (max-width: 600px) {
  body,
  #about,
  #inquiry {
    margin-top: 0;
    background: white;
    box-shadow: none;
  }
  /* body { border-top: 16px solid #ffa100; } */
}

h1 {
  font-size: 22px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 16px;
}

h2 {
  color: #ffa100;
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 8px;
}

p {
  line-height: 140%;
  margin: 16px 0 24px;
  font-size: 14px;
}
</style>
