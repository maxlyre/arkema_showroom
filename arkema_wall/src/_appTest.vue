<script>
  import HelloWorld from "./components/HelloWorld.vue";
  import TheWelcome from "./components/TheWelcome.vue";
  import { useQuery } from '@urql/vue';
import { onMounted } from '@vue/runtime-core';

  export default {
      data() {
        return {
          greeting: 'Hello World!'
        }
      },
      components:{
        HelloWorld,TheWelcome
      },
      computed:{
        wallNav(){
          return this.data.wallNavigation.data.attributes;
        }
      },
      setup() {
        const result = useQuery({
          query: `
            {
              wallNavigation{
                data{
                  id
                  attributes{
                    wall_group{
                      Title
                      walls_items{
                        data{
                          id
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        });
        return {
          fetching: result.fetching,
          data: result.data,
          error: result.error,
        };
      }

};

</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    {{wallNav.wall_group[0].Title}}
  </header>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
