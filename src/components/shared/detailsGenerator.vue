<template>
  <v-list two-line>
    <template v-for="(field, fieldIndex) of schema">
      <v-list-tile v-if="field.type === 'field'">
        <v-list-tile-content v-for="(item, itemIndex) of field.items" :key="(fieldIndex * 2) + itemIndex">
          <v-list-tile-title>{{item.label}}</v-list-tile-title>
          <v-list-tile-sub-title>{{model[item.name] ? model[item.name] : "-"}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider v-else-if="field.type === 'divider'"></v-divider>
      <v-subheader v-else-if="field.type === 'subheader'">{{field.label}}</v-subheader>
      <template v-else-if="field.type === 'list'">
        <v-divider></v-divider>
        <v-subheader>{{field.label}}</v-subheader>
        <v-list-tile v-for="(subfield, subIndex) of model[field.name]" :key="'s'+(subIndex*2)">
          <v-divider v-if="subIndex !== 0"></v-divider>
          <v-list-tile-content v-for="(item, itemIndex) of field.items" :key="(fieldIndex * 2) + itemIndex">
            <v-list-tile-title>{{item.label}}</v-list-tile-title>
            <v-list-tile-sub-title>{{subfield[item.name] ? subfield[item.name] : "-"}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </template>
  </v-list>
</template>

<script>
export default {
  //TODO: check if sublist work correctly
  props: [
    "schema",
    "model"
  ]
}
</script>

<style>

</style>
