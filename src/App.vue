<template>
  <v-app>
    <v-main>
      <div style="height: 200px; width:fit-content;">
      <v-hover  
        v-slot="{ isHovering, props }">
        <v-card
        :elevation="isHovering ? 16 : 2"
          :class="{ 'on-hover': isHovering }"
          class="mx-auto"
          v-bind="props">
          <v-card-text>
            <span ref="text">{{ text }}</span>
            <br><br>
          <v-btn v-show="isHovering"  @click="copyText">Copy</v-btn>
          </v-card-text>
        </v-card>
      </v-hover>
      <v-form>
      <v-text-field
        label="Validated Text:"
        :rules ="[
          ruleRequired,
          (v) => ruleMinLength(v, 5),
          (v) => ruleMaxLength(v, 10),
        ]"
      ></v-text-field>
      <v-text-field
        label="Validated Text:"
        :rules ="[
          ruleRequired,
          (v) => ruleMinLength(v, 5),
          (v) => ruleMaxLength(v, 10),
        ]"
      ></v-text-field>
    </v-form>
      
    </div>
    </v-main>
  </v-app>
</template>

<script>
import baseRules from './rules/rules.js'

export default {
  data: () => ({
   ...baseRules,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue, velit auctor cursus placerat, purus justo sodales leo. ',
    maxLength:10,
  }),
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.$refs.text.textContent)
    }
  },
  directives: {
        focus: {
          // directive definition
      inserted: function (el) {
          let childData = el.querySelectorAll("input")[0]; 
          childData.addEventListener('input', () => {
      if (el.value.length > binding.value) {
        el.value = el.value.slice(0, binding.value);
      }
    });
        }
          }
        }
}
</script>

<style>
div{
 align-items: center;
}
input{
  background-color: gray;
}

</style>
