<template>
    <v-container grid-list-md>
      <v-layout wrap>
        <template v-for="(field, fieldIndex) of schema">
          <v-flex v-if="field.type === SINGLE_LINE_TEXT" xs12 sm6 :md3="field.smallQuarter" :md6="field.half" :md9="field.largeQuarter" :md12="field.full">
            <v-text-field v-model="model[field.name]" :type="field.fieldType" :label="$t(field.label)" :rules="field.rules" :required="field.required? true: false" :counter="field.counter" :mask="field.mask"></v-text-field>
          </v-flex>
          <v-spacer v-else-if="field.type === SPACER"></v-spacer>
          <v-flex v-else-if="field.type === SUBHEADING" xs12 sm12 md12>
            <span class="subheading">{{$t(field.label)}}</span>
          </v-flex>
          <template v-else-if="field.type === LIST">
            <template v-for="(item, index) of model[field.name]">
              <v-flex v-for="(subfield, subIndex) of field.fields" :key="(index * 2) + subIndex" xs12 sm6 :md4="subfield.small" :md5="subfield.large">
                <v-text-field v-model="model[field.name][index][subfield.name]"  :type="subfield.fieldType" :label="$t(subfield.label)" :rules="subfield.rules" :required="subfield.required? true: false" :counter="subfield.counter" :mask="subfield.mask"></v-text-field>
              </v-flex>
              <v-flex class="removeBtn">
                <v-btn color="red darken-1" flat @click.native="removeItem(field.name, item)"><v-icon>fa-times</v-icon></v-btn>
              </v-flex>
            </template>
            <v-flex xs12 sm12 md2>
              <v-btn class="left" color="blue darken-1" flat @click.native="addItem(field.name)">
                <v-icon left>fa-plus</v-icon>{{$t(field.addBtnName)}}
              </v-btn>
            </v-flex>
          </template>
        </template>
      </v-layout>
    </v-container>
</template>

<script>
import {SINGLE_LINE_TEXT, SPACER, SUBHEADING, LIST} from "../../constants/formGenerator";

export default {
  props: [
    "schema",
    "model"
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
  methods: {

    /**
     * addItem - Generic method, used to add empty objects to a list
     *
     * @param  {String} fieldName The name of the list
     * @return {Null}             null
     */
    addItem(fieldName) {
      this.model[fieldName].push({});
    },

    /**
     * removeItem - Removes an item from the list
     *
     * @param  {String} fieldName The name of the list
     * @param  {Number} index     The index of the item
     * @return {Null}             null
     */
    removeItem(fieldName, index) {
      this.model[fieldName].splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
  .subheading {
    float: left;
    font-size: 20px !important;
    font-weight: 400;
    line-height: 32px !important;
    letter-spacing: normal !important;
  }
  .left {
    float: left;
  }
  .removeBtn {
    padding-top: 18px !important;
  }
</style>
