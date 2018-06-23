import {requiredRule, emailRule} from "./rules";
import {SINGLE_LINE_TEXT, SPACER, SUBHEADING, LIST} from "./formGenerator";
import {FIELD, DIVIDER, SUBHEADER, SUBLIST} from "./detailsGenerator";

export const mainHeaders = [
  {
    text: "Buisness Name",
    value: "businessName",
    align: "center"
  },
  {
    text: "Full Name",
    value: "fullname",
    align: "center"
  },
  {
    text: "Invoice Prefix",
    value: "invoicePrefix",
    align: "center"
  },
  {
    text: "Actions",
    value: "actions",
    align: "center"
  }
];

export const clientSchema = [
  {type: SINGLE_LINE_TEXT, name: "businessName", label: "Business Name", rules: [requiredRule], largeQuarter: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "invoicePrefix", label: "Invoice Prefix", rules: [requiredRule], smallQuarter: true, required: true, counter: 4, mask: "AAAA"},
  {type: SINGLE_LINE_TEXT, name: "address", label: "Addresss", rules: [requiredRule], full: true, required: true},
  {type: SPACER},
  {type: SUBHEADING, label: "Contact Details"},
  {type: SINGLE_LINE_TEXT, name: "firstName", label: "First Name", rules: [requiredRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "lastName", label: "Last Name", rules: [requiredRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "email", fieldType: "email", label: "Email", rules: [requiredRule, emailRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "primaryPhone", label: "Primary Phone", rules: [requiredRule], half: true, required: true, mask: "phone"},
  {type: SPACER},
  {type: SUBHEADING, label: "Additional Contacts"},
  {type: LIST, name: "contacts", addBtnName: "New Phone", fields: [
    {type: SINGLE_LINE_TEXT, name: "name", label: "Contact Name", rules: [requiredRule], small: true, required: true},
    {type: SINGLE_LINE_TEXT, name: "phone", label: "Phone", rules: [requiredRule], large: true, required: true, mask: "phone"}
  ]}
];

export const clientDetailsSchema = [
  {type: FIELD, items: [{name: "businessName", label: "Business Name"}, {name: "invoicePrefix", label: "Invoice Prefix"}]},
  {type: FIELD, items: [{name: "address", label: "Address"}, {name: "parent", label: "Parent"}]},
  {type: DIVIDER},
  {type: SUBHEADER, label: "Contacts"},
  {type: FIELD, items: [{name: "fullname", label: "Name"}]},
  {type: FIELD, items: [{name: "email", label: "Email"}, {name: "primaryPhone", label: "Primary Phone"}]},
  {type: SUBLIST, label: "Additional Contacts", name: "contacts", items: [{name: "name", label: "Name"}, {name: "phone", label: "Phone"}]}
];
