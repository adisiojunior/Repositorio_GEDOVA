<template>
  <div>
    <label for="">{{ label }}</label>
    <v-text-field
      outlined
      data-lpignore="true"
      class="rounded-lg"
      :prefix="prefix"
      :suffix="suffix"
      :hint="hint"
      :error-messages="erroValor"
      persistent-hint
      :background-color="backgroundColor"
      :placeholder="showPlacehold === true ? placeholder : null"
      v-on:blur="unFocuded"
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
      v-money="!showMask ? null : money"
      v-on:keydown="onkeydown"
      @focus="onFocus"

    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "CustomTextFields",
  props: {
    label: {
      type: String,
      required: true,
    },
    prefix: String,
    hint: {
      type: String,
      required: true,
    },
    mask: null,
    erroMessage: String,
    placeholder: String,
    suffix: String,
    value: [String, Number],
    onChanged: Function,
    min: Number,
    max: Number,
    erroMin: String,
    erroMax: String,
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
.v-application--is-ltr .v-text-field__prefix {
  color: #a2aaac !important;
}
.v-application--is-ltr .v-text-field__suffix {
  color: #a2aaac !important;
}
* {
  font-family: "IBM Plex Sans", sans-serif;
}
.v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  align-items: stretch;
  min-height: 48px;
}
v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  align-items: stretch;
  min-height: 48px !important;
}
.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot:hover {
  border-width: 1px !important;
  border-style: solid !important;
  border-color: #6fbd44 !important;
}
.theme--light.v-label {
  color: #A2AAAC!important;
  font-weight: normal;
}
.v-application .primary--text {
  color: #000 !important;
  caret-color: #000 !important;
}
.v-label {
  color: #000 !important;
}
label {
  font-weight: 700;
  margin-bottom: 8px;
  margin-left: 0px !important;
  color: #485b60 !important;
}
::placeholder {
  color: #a2aaac !important;
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder {
  color: #a2aaac !important;
}
::-ms-input-placeholder {
  color: #000 !important;
}
.v-btn {
  text-transform: none !important;
  font-weight: 700;
  font-size: 14pt;
}
.v-skeleton-loader--is-loading {
  margin-left: 24px;
  margin-right: 24px;
}
div a {
  color: #4376ff;
  font-weight: 400;
  font-size: 14px;
  text-decoration-color: #4376ff;
}
.router-link-active {
  color: #f48120 !important;
  font-size: 14px;
  font-weight: 700;
}
v-sheet.v-card {
  border-radius: 16px !important;
  box-shadow: 0px 4px 8px rgb(29 35 39 / 8%), 0px 0px 2px rgb(29 35 39 / 6%),
    0px 0px 1px rgb(29 35 39 / 4%) !important;
}

.v-messages__message {
  height: 35px !important;
}

@media (max-width: 1600px) {
  .v-text-field {
    font-size: 14px;
  }
}
</style>
