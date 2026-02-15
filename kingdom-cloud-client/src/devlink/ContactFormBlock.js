"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContactFormBlock.module.css";

export function ContactFormBlock({ as: _Component = _Builtin.FormWrapper }) {
  return (
    <_Component className={_utils.cx(_styles, "form_block")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "form")}
        name="wf-form-Contact-Form"
        data-name="Contact Form"
        method="get"
        data-wf-page-id=""
        data-wf-element-id="d492c753-bede-f8df-1669-f6089ceccf6d"
        id="wf-form-contact-form"
      >
        <_Builtin.Block className={_utils.cx(_styles, "form_item")} tag="div">
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "input_label")}
            htmlFor="name-9"
          >
            {"Full name"}
          </_Builtin.FormBlockLabel>
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input_field")}
            name="name-9"
            maxLength={256}
            data-name="Name 9"
            placeholder="Your name"
            disabled={false}
            type="text"
            required={false}
            autoFocus={false}
            id="name-9"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "form_item")} tag="div">
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "input_label")}
            htmlFor="email-15"
          >
            {"Email address"}
          </_Builtin.FormBlockLabel>
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input_field")}
            name="email-15"
            maxLength={256}
            data-name="Email 15"
            placeholder="email@website.com"
            disabled={false}
            type="email"
            required={true}
            autoFocus={false}
            id="email-15"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "form_item")} tag="div">
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "input_label")}
            htmlFor="field-3"
          >
            {"Service needed"}
          </_Builtin.FormBlockLabel>
          <_Builtin.FormSelect
            className={_utils.cx(_styles, "input_field", "is-select")}
            name="field-2"
            data-name="Field 2"
            required={false}
            multiple={false}
            id="field-2"
            options={[
              {
                t: "Select one...",
                v: "",
              },
              {
                t: "First choice",
                v: "First",
              },
              {
                t: "Second choice",
                v: "Second",
              },
              {
                t: "Third choice",
                v: "Third",
              },
            ]}
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "form_item")} tag="div">
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "input_label")}
            htmlFor="message-16"
          >
            {"How can we help?"}
          </_Builtin.FormBlockLabel>
          <_Builtin.FormTextarea
            className={_utils.cx(_styles, "input_field", "input_text-area")}
            name="message-16"
            maxLength={5000}
            data-name="Message 16"
            placeholder="Type your message..."
            required={false}
            autoFocus={false}
            id="message-16"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "form_item")} tag="div">
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(_styles, "checkbox", "margin-bottom_none")}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "checkbox_toggle")}
              tag="div"
            />
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "inline-input-0")}
              type="checkbox"
              name="agreement-checkbox-4"
              data-name="Agreement Checkbox 4"
              required={true}
              checked={false}
              id="agreement-checkbox-4"
              form={{
                type: "checkbox-input",
                name: "Agreement Checkbox 4",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
              htmlFor="agreement-checkbox-4"
            >
              {"I agree to the "}
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "text-link",
                  "is-secondary",
                  "text-span_padding"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"privacy policy"}
              </_Builtin.Link>
              {"."}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "form_item")} tag="div">
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "button-group",
              "is-vertical-stretch"
            )}
            tag="div"
          >
            <_Builtin.FormButton
              className={_utils.cx(_styles, "button")}
              type="submit"
              value="Submit"
              data-wait="Please wait..."
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage
        className={_utils.cx(_styles, "form_success-message")}
      >
        <_Builtin.Block tag="div">
          {"Thank you! We’ll be in touch soon."}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage
        className={_utils.cx(_styles, "form_error-message")}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "form_error-message_content")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "display_inline-block")}
            width="1216"
            height="832"
            loading="lazy"
            alt="[background image] image of construction equipment"
            src="https://cdn.prod.website-files.com/6990aa3e909a79ec1f320be9/6990aa895112eeaa673cd1bd_cb8965c4-e289-424d-84b4-bbfbf0ed2b7e.avif"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "display_inline-block")}
            tag="div"
          >
            {"Submission failed. Please try again."}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
