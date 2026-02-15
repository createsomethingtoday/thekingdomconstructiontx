"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "nav", "is-secondary")} tag="div">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nav_container")}
        tag="div"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="400"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: true,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_left")}
          id={_utils.cx(
            _styles,
            "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd4b-367f4de3"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_logo")}
            id={_utils.cx(
              _styles,
              "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd4a-367f4de3"
            )}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav_logo-icon")}
              tag="div"
            >
              <_Builtin.DOM
                tag="svg"
                slot=""
                width="100%"
                height="100%"
                viewBox="0 0 33 33"
                preserveAspectRatio="xMidYMid meet"
              >
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"
                  fill="currentColor"
                />
              </_Builtin.DOM>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "paragraph_large",
                "margin-bottom_none"
              )}
              tag="div"
              data-brand-name="true"
            >
              {"The Kingdom Construction"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_right")}
          id={_utils.cx(
            _styles,
            "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdf4-367f4de3"
          )}
          tag="div"
        >
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav_menu")}
            id={_utils.cx(
              _styles,
              "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdef-367f4de3"
            )}
            tag="nav"
            role="navigation"
          >
            <_Builtin.List
              className={_utils.cx(_styles, "nav_menu-list")}
              tag="ul"
              role="list"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown-menu")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Services"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav_caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "mega-nav_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "mega-nav_dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "grid_3-col",
                          "tablet-1-col-1",
                          "gap-medium",
                          "margin-bottom_none"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdc0-367f4de3"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e6d-ad6d2e56"
                          )}
                        >
                          <_Builtin.Grid
                            className={_utils.cx(
                              _styles,
                              "grid_3-col",
                              "tablet-1-col-1",
                              "gap-small"
                            )}
                          >
                            <_Builtin.Block tag="div">
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Residential"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd5c-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd5a-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e78-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Interior Painting"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          "Professional interior painting with clean prep and finish quality."
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd67-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd65-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-f807f6d1-1643-a581-cf58-1ddfb132bd6d-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"New Construction"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Custom homes built to your needs."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd72-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd70-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_81a98210-c6c4-fcf3-e0c3-108b18c0cc9b-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Additions"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Expand your home with confidence."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd99-367f4de3"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Commercial"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd81-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd7f-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9f30640f-1f64-d0c6-60e9-e2b460cf1f47-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Office Build-Outs"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          "Modernize your workspace efficiently."
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd8c-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd8a-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9f30640f-1f64-d0c6-60e9-e2b460cf1f52-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Retail Spaces"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Create inviting, functional stores."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd97-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cd95-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9f30640f-1f64-d0c6-60e9-e2b460cf1f5d-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Renovations"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          "Transform existing commercial properties."
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdbe-367f4de3"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Specialty"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(_styles, "mega-nav_list")}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cda6-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cda4-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_246168ec-5422-2d22-c1a6-e8b7eb4d77d8-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Outdoor Living"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Decks, patios, and outdoor kitchens."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdb1-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdaf-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_246168ec-5422-2d22-c1a6-e8b7eb4d77e3-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Restoration"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Repair and restore after damage."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "margin-bottom_none"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdbc-367f4de3"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav_link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon",
                                        "is-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdba-367f4de3"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_246168ec-5422-2d22-c1a6-e8b7eb4d77ee-ad6d2e56"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Consulting"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph_small",
                                          "text-color_secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Expert advice for your next project."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "flex_horizontal",
                            "w-node-d0439d8a-1812-14cf-5b16-43ccfce4cdcf-367f4de3"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ede-ad6d2e56"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "card-link",
                              "is-inverse",
                              "flex-child_expand",
                              "on-secondary"
                            )}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "card_body")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "heading_tertiary"
                                )}
                                tag="div"
                              >
                                {"Build with quality. Trust our team."}
                              </_Builtin.Block>
                              <_Builtin.Paragraph
                                className={_utils.cx(
                                  _styles,
                                  "paragraph_small",
                                  "text-color_inverse-secondary"
                                )}
                              >
                                {
                                  "From concept to completion, we deliver reliable construction solutions for homes and businesses."
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin_top-auto"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "button-group")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-button",
                                      "is-secondary"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Contact"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "button_icon"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        slot=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          slot=""
                                          d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Blog"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown-menu")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Service Areas"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav_caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav_dropdown-list-1")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "nav-menu_dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "flex_vertical",
                          "margin-bottom_none"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(_styles, "margin-bottom_none")}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav_dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button_label")}
                              tag="div"
                            >
                              {"Service Areas"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(_styles, "margin-bottom_none")}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav_dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button_label")}
                              tag="div"
                            >
                              {"Reviews"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.NavbarMenu>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group", "margin-top_none")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button_label")}
                tag="div"
              >
                {"Book"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "nav_mobile-menu-button")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "icon")} tag="div">
            <_Builtin.DOM
              tag="svg"
              slot=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <_Builtin.DOM
                tag="g"
                slot=""
                _class="nc-icon-wrapper"
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="1.5"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              >
                <_Builtin.DOM
                  tag="line"
                  slot=""
                  x1="1"
                  y1="12"
                  x2="23"
                  y2="12"
                  stroke="currentColor"
                />
                <_Builtin.DOM tag="line" slot="" x1="1" y1="5" x2="23" y2="5" />
                <_Builtin.DOM
                  tag="line"
                  slot=""
                  x1="1"
                  y1="19"
                  x2="23"
                  y2="19"
                />
              </_Builtin.DOM>
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
