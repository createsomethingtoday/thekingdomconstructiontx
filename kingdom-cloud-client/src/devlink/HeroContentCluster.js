"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroContentCluster.module.css";

export function HeroContentCluster({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "header",
        "is-2-col",
        "w-node-_219edd0e-cbc1-1352-002b-a7210567cb48-0567cb48"
      )}
      id={_utils.cx(
        _styles,
        "w-node-b950a400-39ba-1eed-541b-7e4104ac43f8-9bb3ba16"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "grid-item-manual",
          "w-node-_219edd0e-cbc1-1352-002b-a7210567cb49-0567cb48"
        )}
        id={_utils.cx(
          _styles,
          "w-node-c1cb867c-8d64-aec2-a917-539dff13073f-9bb3ba16"
        )}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading_hero")}
          id={_utils.cx(
            _styles,
            "w-node-_219edd0e-cbc1-1352-002b-a7210567cb4a-0567cb48"
          )}
          tag="h1"
        >
          {"Quality construction. Reliable results."}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "grid-item-manual",
          "w-node-_219edd0e-cbc1-1352-002b-a7210567cb4c-0567cb48"
        )}
        id={_utils.cx(
          _styles,
          "w-node-eb446723-2e6b-cd5f-2d7d-ab0a9bb3ba1c-9bb3ba16"
        )}
        tag="div"
      >
        <_Builtin.RichText
          className={_utils.cx(_styles, "rich-text", "subheading")}
          tag="div"
          slot=""
        >
          <_Builtin.Paragraph>
            {
              "Professional construction for residential and commercial projects. Dependable service, skilled teams, and clear communication from start to finish."
            }
          </_Builtin.Paragraph>
        </_Builtin.RichText>
        <_Builtin.Block
          className={_utils.cx(_styles, "button-group")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ix-link-wrapper")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Services"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "ix-link-wrapper")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "is-secondary")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Quote"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
