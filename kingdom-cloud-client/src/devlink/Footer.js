"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer", "is-inverse")}
      tag="footer"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "footer_bottom")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "footer_link", "on-inverse")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">
              {"info@thekingdomconstructiontx.com"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.List
            className={_utils.cx(
              _styles,
              "flex_horizontal",
              "is-y-center",
              "is-x-center",
              "gap-xsmall",
              "is-wrap",
              "margin-bottom_none",
              "padding_none"
            )}
            tag="ul"
            role="list"
            unstyled={true}
          >
            <_Builtin.ListItem
              className={_utils.cx(_styles, "margin-bottom_none")}
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link", "on-inverse")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Dribbble"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem
              className={_utils.cx(_styles, "margin-bottom_none")}
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link", "on-inverse")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Instagram"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem
              className={_utils.cx(_styles, "margin-bottom_none")}
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link", "on-inverse")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"LinkedIn"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
          </_Builtin.List>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-vertical_large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ix-link-wrapper")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "text-link_inherit",
                "width_100percent"
              )}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.DOM
                tag="svg"
                slot=""
                width="100%"
                height="100%"
                viewBox="0 0 109 33"
              >
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M107.42,12.4c-.59-1.14-1.43-2.01-2.53-2.62-1.08-.61-2.39-.92-3.9-.92h-5.28v15.28h5.17c1.55,0,2.88-.31,3.98-.92,1.11-.61,1.96-1.49,2.55-2.63.59-1.15.89-2.51.89-4.11s-.3-2.94-.88-4.08ZM105,19.41c-.35.77-.89,1.36-1.6,1.75-.71.39-1.6.58-2.66.58h-2.28v-10.48h2.36c1.03,0,1.9.19,2.59.58.71.38,1.24.96,1.59,1.74.36.77.54,1.74.54,2.9s-.18,2.15-.54,2.93ZM90.57,8.86h2.75v15.28h-2.46l-7.2-10.41h-.12v10.41h-2.77v-15.28h2.48l7.19,10.41h.13v-10.41ZM70.59,8.86l-5.38,15.28h2.96l1.26-3.77h5.74l1.27,3.77h2.95l-5.38-15.28h-3.42ZM70.18,18.15l2.06-6.15h.12l2.07,6.15h-4.25ZM49.69,16.72c-.5-.3-1.01-.47-1.56-.5v-.15c.5-.11.95-.31,1.35-.58.41-.28.73-.63.97-1.07.23-.44.35-.98.35-1.6,0-.75-.18-1.43-.55-2.03-.36-.59-.91-1.06-1.65-1.4-.73-.35-1.64-.53-2.75-.53h-5.85v15.28h6.19c1.17,0,2.13-.19,2.91-.55.77-.36,1.34-.86,1.73-1.48.38-.63.57-1.34.57-2.14s-.16-1.43-.48-1.98-.73-.97-1.23-1.27ZM42.76,11.15h2.8c.81,0,1.43.19,1.84.57.42.38.63.87.63,1.46,0,.45-.12.84-.34,1.16-.22.33-.52.58-.9.76-.38.17-.81.26-1.29.26h-2.74v-4.21ZM47.92,21.25c-.45.38-1.17.57-2.17.57h-2.98v-4.47h3.05c.57,0,1.07.11,1.48.32.41.21.73.5.95.87.23.36.34.77.34,1.22,0,.61-.23,1.1-.67,1.49ZM61.82,17.96c.81-.39,1.42-.95,1.83-1.66.42-.72.63-1.57.63-2.55s-.21-1.83-.62-2.56c-.41-.74-1.01-1.31-1.81-1.72-.8-.4-1.78-.61-2.96-.61h-5.72v15.28h2.76v-5.6h2.82l3,5.6h3.09l-3.31-6.06c.1-.03.2-.07.29-.12ZM61.15,15.12c-.21.37-.53.65-.97.84s-1,.29-1.69.29h-2.55v-5.07h2.54c.69,0,1.25.1,1.69.3.44.2.76.49.98.88.21.38.32.85.32,1.39s-.11,1-.32,1.37Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"
                  fill="currentColor"
                />
              </_Builtin.DOM>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "footer_bottom")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-color_secondary")}
            tag="div"
          >
            {"©"}
            {" 2025 The Kingdom Construction"}
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "footer_link", "on-inverse")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Contact"}</_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
