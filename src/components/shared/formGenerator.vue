<template>
  <v-form v-model="valid" ref="form" >
    <v-container grid-list-md>
      <v-layout wrap>
        <template v-for="(field, fieldIndex) in schema">
          <v-flex v-if="field.type === SINGLE_LINE_TEXT" xs12 sm6 :md3="field.smallQuarter" :md6="field.half" :md9="field.largeQuarter" :md12="field.full">
            <v-text-field v-model="model[field.name]" :type="field.fieldType" :label="field.label" :rules="field.rules" :required="field.required? true: false" :counter="field.counter" :mask="field.mask"></v-text-field>
          </v-flex>
          <v-spacer v-else-if="field.type === SPACER"></v-spacer>
          <v-flex v-else-if="field.type === SUBHEADING" xs12 sm12 md12>
            <span class="subheading">{{field.label}}</span>
          </v-flex>
          <template v-else-if="field.type === LIST">
            <template v-for="(item, index) in model[field.name]">
              <v-flex v-for="(subfield, subIndex) in field.fields" :key="(index * 2) + subIndex" xs12 sm6 :md4="subfield.small" :md5="subfield.large">
                <v-text-field v-model="model[field.name][index][subfield.name]"  :type="subfield.fieldType" :label="subfield.label" :rules="subfield.rules" :required="subfield.required? true: false" :counter="subfield.counter" :mask="subfield.mask"></v-text-field>
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
import {SINGLE_LINE_TEXT, SPACER, SUBHEADING, LIST} from "../../constants/formGenerator";

export default {
  props: [
    "schema"
  ],
  computed: {
    SINGLE_LINE_TEXT() {
      return SINGLE_LINE_TEXT;
    },
    SPACER() {
      return SPACER;
    },
    SUBHEADING() {
      return SUBHEADING;
    },
    LIST() {
      return LIST;
    }
  },
  data() {
    return {
      valid: true,
      model: {}
    }
  },
  methods: {
    addItem(fieldName) {
      if(!this.model[fieldName]) {
        this.$set(this.model, fieldName, []);
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
