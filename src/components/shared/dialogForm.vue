<template>
  <v-form v-model="valid" ref="form" >
    <v-container grid-list-md>
      <v-layout wrap>
        <template v-for="(field) in schema">
          <!-- TODO: Add a switch case -->
          <!-- TODO: Add a constant for types of fields -->
          <!-- TODO: Add required -->
          <!-- TODO: Add mask, counter and type -->
          <v-flex v-if="field.type === 'single-line-text'" xs{{field.xsSize}} sm{{field.smSize}} md{{field.mdSize}}>
            <v-text-field v-model="model[field.name]" label={{field.lavel}} :rules="{{field.rules}}" required></v-text-field>
          </v-flex>
          <v-spacer v-if="field.type === 'spacer'"></v-spacer>
          <v-flex v-if="field.type === 'subheading'" xs12 sm12 md12><span class="subheading">{{field.label}}</span></v-flex>
        </template>


        <v-flex xs12 sm6 md9>
          <v-text-field v-model="client.businessName" label="Business Name" :rules="[rules.required]" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <v-text-field v-model="client.invoicePrefix" counter="4" mask="AAAA" label="Invoice Prefix" :rules="[rules.required]" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12>
          <v-text-field v-model="client.address" label="Address" :rules="[rules.required]" required></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm12 md12><span class="subheading">Contant Details</span></v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field v-model="client.firstname" label="First Name" :rules="[rules.required]" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field v-model="client.lastname" label="Last Name" :rules="[rules.required]" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field v-model="client.email" label="Email" type="email" :rules="[rules.required, rules.email]" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field v-model="client.primaryPhone" label="Primary Phone" :mask="'phone'"></v-text-field>
        </v-flex>
        <!-- Additional Phones -->
        <template v-for="(contact, index) in client.contacts">
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="contact.name" label="Contact Name" :rules="[rules.required]" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md5>
              <v-text-field v-model="contact.phone" label="Phone" :mask="'phone'" :rules="[rules.required]" required></v-text-field>
            </v-flex>
            <v-flex><v-btn color="red darken-1" flat @click.native="removeContact(index)"><v-icon>clear</v-icon></v-btn></v-flex>
          </template>
        <v-flex xs12 sm12 md2>
          <v-btn class="left" color="blue darken-1" flat @click.native="addContact">
            <v-icon>add</v-icon>New Phone</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: {
    schema
  },
  data() {
    return {
      model: {}
    }
  }
};
</script>

<style>

</style>
