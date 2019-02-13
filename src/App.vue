<template>
  <v-app>
    <v-content>
      <div id="logo-wrapper">
        <img id="logo" alt="logo" src="./assets/logo.jpg">
      </div>
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

#logo-wrapper {
  text-align: center;
  margin-top: 24px;
  @media (max-width: 600px) {
    margin-top: 12px;
  }

  img#logo {
    width: 50%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
}

h1 {
  font-size: 2.5em;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 16px;
  text-align: center;
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
