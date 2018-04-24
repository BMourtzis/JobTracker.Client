<template>
  <v-form v-model="valid" ref="form" >
    <v-container grid-list-md>
      <v-layout wrap>
        <template v-for="(field) of schema">
          <!-- TODO: Add a constant for symbols of fields -->
          <!-- TODO: Find a way to set size -->
          <v-flex v-if="field.type === 'single-line-text'">
            <v-text-field v-model="model[field.name]" :type="field.fieldType" :label="field.label" :rules="field.rules" :required="field.required? true: false" :counter="field.counter" :mask="field.mask"></v-text-field>
          </v-flex>
          <v-spacer v-else-if="field.type === 'spacer'"></v-spacer>
          <v-flex v-else-if="field.type === 'subheading'" xs12 sm12 md12>
            <span class="subheading">{{field.label}}</span>
          </v-flex>
          <template v-else-if="field.type === 'sub-list'">
            <template v-for="(item, index) of model[field.name]">
              <v-flex v-for="(subfield) of field.fields">
                <v-text-field v-model="model[field.name][index][subfield.name]" :type="subfield.fieldType" :label="subfield.label" :rules="subfield.rules" :required="subfield.required? true: false" :counter="subfield.counter" :mask="subfield.mask"></v-text-field>
              </v-flex>
              <v-flex><v-btn color="red darken-1" flat @click.native="removeItem(field.name, item)"><v-icon>clear</v-icon></v-btn></v-flex>
            </template>
            <v-flex xs12 sm12 md2>
              <v-btn class="left" color="blue darken-1" flat @click.native="addItem(field.name)">
                <v-icon>add</v-icon>{{field.addBtnName}}</v-btn>
            </v-flex>
          </template>
        </template>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: [
    "schema"
  ],
  data() {
    return {
      valid: true,
      model: {}
    }
  },
  methods: {
    addItem(fieldName) {
      if(!this.model[fieldName]) {
        this.model[fieldName] = [];
      }
      this.model[fieldName].push({});
    },
    removeItem(fieldName, index) {
      this.model[fieldName].splice(index, 1);
    }
  }
};
</script>

<style>

</style>
