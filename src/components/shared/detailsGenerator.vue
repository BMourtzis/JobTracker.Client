<template>
  <v-list two-line>
    <template v-for="(field, fieldIndex) of schema">
      <v-list-tile v-if="field.type === FIELD">
        <v-list-tile-content v-for="(item, itemIndex) of field.items" :key="(fieldIndex * 2) + itemIndex">
          <v-list-tile-title>{{$t(item.label)}}</v-list-tile-title>
          <v-list-tile-sub-title>{{model[item.name] ? model[item.name] : "-"}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider v-else-if="field.type === DIVIDER"></v-divider>
      <v-subheader v-else-if="field.type === SUBHEADER">{{$t(field.label)}}</v-subheader>
      <template v-else-if="field.type === SUBLIST">
        <v-divider></v-divider>
        <v-subheader>{{$t(field.label)}}</v-subheader>
        <v-list-tile v-for="(subfield, subIndex) of model[field.name]" :key="'s'+(subIndex*2)">
          <v-divider v-if="subIndex !== 0"></v-divider>
          <v-list-tile-content v-for="(item, itemIndex) of field.items" :key="(fieldIndex * 2) + itemIndex">
            <v-list-tile-title>{{$t(item.label)}}</v-list-tile-title>
            <v-list-tile-sub-title>{{subfield[item.name] ? subfield[item.name] : "-"}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </template>
  </v-list>
</template>

<script>
import {FIELD, DIVIDER, SUBHEADER, SUBLIST} from "../../constants/detailsGenerator";

export default {
  props: [
    "schema",
    "model"
  ],
  data() {
    return {
      FIELD,
      DIVIDER,
      SUBHEADER,
      SUBLIST
    }
  }
}
</script>

<style>

</style>
