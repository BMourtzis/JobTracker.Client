import {requiredRule, emailRule} from "./rules";
import {SINGLE_LINE_TEXT, SPACER, SUBHEADING, LIST} from "./formGenerator";
import {FIELD, DIVIDER, SUBHEADER, SUBLIST} from "./detailsGenerator";
import { i18n } from '../localization';

export const mainHeaders = [
  {
    text: i18n.t("message.client.labelBusinessName"),
    value: "businessName",
    align: "center"
  },
  {
    text: i18n.t("message.client.labelFullName"),
    value: "fullname",
    align: "center"
  },
  {
    text: i18n.t("message.client.labelInvoicePrefix"),
    value: "invoicePrefix",
    align: "center"
  },
  {
    text: i18n.t("message.client.labelActions"),
    value: "actions",
    align: "center"
  }
];

export const clientSchema = [
  {type: SINGLE_LINE_TEXT, name: "businessName", label: "message.client.labelBusinessName", rules: [requiredRule], largeQuarter: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "invoicePrefix", label: "message.client.labelInvoicePrefix", rules: [requiredRule], smallQuarter: true, required: true, counter: 4, mask: "AAAA"},
  {type: SINGLE_LINE_TEXT, name: "address", label: "message.client.labelAddress", rules: [requiredRule], full: true, required: true},
  {type: SPACER},
  {type: SUBHEADING, label: "message.client.labelContactDetails"},
  {type: SINGLE_LINE_TEXT, name: "firstName", label: "message.client.labelFirstName", rules: [requiredRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "lastName", label: "message.client.labelLastName", rules: [requiredRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "email", fieldType: "email", label: "message.client.labelEmail", rules: [requiredRule, emailRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "primaryPhone", label: "message.client.labelPrimaryPhone", rules: [requiredRule], half: true, required: true, mask: "phone"},
  {type: SPACER},
  {type: SUBHEADING, label: "message.client.labelAdditionalContacts"},
  {type: LIST, name: "contacts", addBtnName: "message.client.labelNewContact", fields: [
    {type: SINGLE_LINE_TEXT, name: "name", label: "message.client.labelContactName", rules: [requiredRule], small: true, required: true},
    {type: SINGLE_LINE_TEXT, name: "phone", label: "message.client.labelPhone", rules: [requiredRule], large: true, required: true, mask: "phone"}
  ]}
];

export const clientDetailsSchema = [
  {type: FIELD, items: [{name: "businessName", label: "message.client.labelBusinessName"}, {name: "invoicePrefix", label: "message.client.labelInvoicePrefix"}]},
  {type: FIELD, items: [{name: "address", label: "message.client.labelAddress"}, {name: "parent", label: "message.client.labelParent"}]},
  {type: DIVIDER},
  {type: SUBHEADER, label: "message.client.labelContactDetails"},
  {type: FIELD, items: [{name: "fullname", label: "message.client.labelFullName"}]},
  {type: FIELD, items: [{name: "email", label: "message.client.labelEmail"}, {name: "primaryPhone", label: "message.client.labelPrimaryPhone"}]},
  {type: SUBLIST, label: "message.client.labelAdditionalContacts", name: "contacts", items: [{name: "name", label: "message.client.labelContactName"}, {name: "phone", label: "message.client.labelPhone"}]}
];
