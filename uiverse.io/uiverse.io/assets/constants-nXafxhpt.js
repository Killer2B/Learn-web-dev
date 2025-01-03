import {
    B as o,
    P as i,
    C as a,
    S as r,
    F as n,
    a as s,
    I as c,
    b as l,
    c as d,
    d as p,
    Q as h,
    e as w,
    f as b,
    m as u,
    s as m,
    g,
    h as f,
    i as k,
    j as x,
    k as y
} from "./icons-pNqq09c6.js";
const T = {
        elements: {
            id: "elements",
            label: "All",
            path: "elements",
            title: "Browse all",
            altTitle: "UI elements",
            icon: o
        },
        buttons: {
            id: "button",
            label: "Buttons",
            path: "buttons",
            icon: i
        },
        checkboxes: {
            id: "checkbox",
            label: "Checkboxes",
            path: "checkboxes",
            icon: a
        },
        switches: {
            id: "switch",
            label: "Toggle switches",
            path: "switches",
            icon: r
        },
        cards: {
            id: "card",
            label: "Cards",
            path: "cards",
            icon: n
        },
        loaders: {
            id: "loader",
            label: "Loaders",
            path: "loaders",
            icon: s
        },
        inputs: {
            id: "input",
            label: "Inputs",
            path: "inputs",
            icon: c
        },
        "radio-buttons": {
            id: "radio",
            label: "Radio buttons",
            path: "radio-buttons",
            icon: l,
            new: !1
        },
        forms: {
            id: "form",
            label: "Forms",
            path: "forms",
            new: !1,
            icon: d
        },
        patterns: {
            id: "pattern",
            label: "Patterns",
            path: "patterns",
            icon: p
        },
        tooltips: {
            id: "tooltip",
            label: "Tooltips",
            path: "tooltips",
            new: !0,
            hideFromSidebar: !1,
            icon: h
        },
        favorites: {
            id: "favorites",
            label: "My favorites",
            path: "favorites",
            icon: w
        }
    },
    S = {
        HTML: "HTML",
        CSS: "CSS"
    },
    I = {
        theme: {
            id: "theme",
            items: [{
                label: "Any theme",
                id: "all",
                icon: b
            }, {
                label: "Dark",
                id: "dark",
                icon: u
            }, {
                label: "Light",
                id: "light",
                icon: m
            }]
        },
        orderBy: {
            id: "orderBy",
            icon: g,
            items: [{
                label: "Randomized",
                id: "randomized",
                icon: f
            }, {
                label: "Favorites",
                id: "favorites",
                icon: k
            }, {
                label: "Views",
                id: "views",
                icon: x
            }, {
                label: "Recent",
                id: "recent",
                icon: y
            }]
        }
    },
    R = {
        button: {
            css: `.button {
  cursor: pointer;
}`,
            html: `<button class="button">
  Button
</button>`,
            tailwind: `<button class="cursor-pointer">
  Button
</button>`
        },
        switch: {
            css: `/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: .4s;
}

.switch input:checked + .slider {
  background-color: #2196F3;
}

.switch input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

.switch input:checked + .slider:before {
  transform: translateX(1.5em);
}`,
            html: `<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>`
        },
        checkbox: {
            css: `/* Hide the default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}`,
            html: `<label class="container">
  <input type="checkbox" checked="checked">
  <div class="checkmark"></div>
</label>`
        },
        card: {
            html: '<div class="card"></div>',
            css: `.card {
  width: 190px;
  height: 254px;
  background: lightgrey;
}`
        },
        loader: {
            html: '<div class="loader"></div>',
            css: `.loader {
  
}`
        },
        input: {
            html: '<input type="text" name="text" class="input">',
            css: `.input {
  max-width: 190px;
}`
        },
        form: {
            html: `<form class="form">
    <input type="text" class="input">
    <input type="text" class="input"> 
    <button>Submit</button>
</form>`,
            css: `.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form button {
  align-self: flex-end;
}
    `
        },
        notification: {
            html: '<div class="notification"></div>',
            css: `.notification {
  width: 250px;
  height: 60px;
  background: lightgrey;
  border-radius: 14px;
}`
        },
        radio: {
            html: `<div class="radio-input">
  <input type="radio" id="value-1" name="value-radio" value="value-1">
  <input type="radio" id="value-2" name="value-radio" value="value-2">
  <input type="radio" id="value-3" name="value-radio" value="value-3">
</div>`,
            css: `.radio-input input {

}`
        },
        pattern: {
            html: '<div class="container"></div>',
            css: `.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  background: lightblue;
}`
        },
        tooltip: {
            html: `<div class="tooltip-container">
  <span class="tooltip">Uiverse.io</span>
  <span class="text">Tooltip</span>
</div>`,
            css: `/* This is an example, feel free to delete this code */
.tooltip-container {
  --background: #22d3ee;
  position: relative;
  background: var(--background);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  padding: 0.7em 1.8em;
}

.tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.3em 0.6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  background: var(--background);
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  bottom: -0.2em;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  background: var(--background);
}

.tooltip-container:hover .tooltip {
  top: -100%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}`
        }
    },
    E = `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
button {
  font-family: inherit;
}

`,
    O = (t = []) => `${t.map(e=>`Copyright - ${new Date().getFullYear()} ${e} 
`).join("")}
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

`,
    A = {
        card: "grid-rows-[560px_calc(100vh_-_650px)]",
        default: "grid-rows-[380px_calc(100vh_-_470px)]",
        form: "grid-rows-[580px_calc(100vh_-_670px)]",
        tailwind: "grid-rows-[calc(100vh_-_156px)_53px]"
    },
    N = `
/* ! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com */*,::after,::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb
}

::after,::before {
  --tw-content: ''
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal
}

body {
  margin: 0;
  line-height: inherit
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px
}

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted
}

h1,h2,h3,h4,h5,h6 {
  font-size: inherit;
  font-weight: inherit
}

a {
  color: inherit;
  text-decoration: inherit
}

b,strong {
  font-weight: bolder
}

code,kbd,pre,samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em
}

small {
  font-size: 80%
}

sub,sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse
}

button,input,optgroup,select,textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0
}

button,select {
  text-transform: none
}

[type=button],[type=reset],[type=submit],button {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none
}

:-moz-focusring {
  outline: auto
}

:-moz-ui-invalid {
  box-shadow: none
}

progress {
  vertical-align: baseline
}

::-webkit-inner-spin-button,::-webkit-outer-spin-button {
  height: auto
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}

::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}

summary {
  display: list-item
}

blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre {
  margin: 0
}

fieldset {
  margin: 0;
  padding: 0
}

legend {
  padding: 0
}

menu,ol,ul {
  list-style: none;
  margin: 0;
  padding: 0
}

textarea {
  resize: vertical
}

input::placeholder,textarea::placeholder {
  opacity: 1;
  color: #9ca3af
}

[role=button],button {
  cursor: pointer
}

:disabled {
  cursor: default
}

audio,canvas,embed,iframe,img,object,svg,video {
  display: block;
  vertical-align: middle
}

img,video {
  max-width: 100%;
  height: auto
}

[hidden] {
  display: none
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;--tw-pan-y:;
  --tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position: ;--tw-gradient-via-position:;
  --tw-gradient-to-position: ;--tw-ordinal:;
  --tw-slashed-zero: ;--tw-numeric-figure:;
  --tw-numeric-spacing: ;--tw-numeric-fraction:;
  --tw-ring-inset: ;--tw-ring-offset-width:0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;--tw-brightness:;
  --tw-contrast: ;--tw-grayscale:;
  --tw-hue-rotate: ;--tw-invert:;
  --tw-saturate: ;--tw-sepia:;
  --tw-drop-shadow: ;--tw-backdrop-blur:;
  --tw-backdrop-brightness: ;--tw-backdrop-contrast:;
  --tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate:;
  --tw-backdrop-invert: ;--tw-backdrop-opacity:;
  --tw-backdrop-saturate: ;--tw-backdrop-sepia:
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;--tw-pan-y:;
  --tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position: ;--tw-gradient-via-position:;
  --tw-gradient-to-position: ;--tw-ordinal:;
  --tw-slashed-zero: ;--tw-numeric-figure:;
  --tw-numeric-spacing: ;--tw-numeric-fraction:;
  --tw-ring-inset: ;--tw-ring-offset-width:0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;--tw-brightness:;
  --tw-contrast: ;--tw-grayscale:;
  --tw-hue-rotate: ;--tw-invert:;
  --tw-saturate: ;--tw-sepia:;
  --tw-drop-shadow: ;--tw-backdrop-blur:;
  --tw-backdrop-brightness: ;--tw-backdrop-contrast:;
  --tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate:;
  --tw-backdrop-invert: ;--tw-backdrop-opacity:;
  --tw-backdrop-saturate: ;--tw-backdrop-sepia:
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;--tw-pan-y:;
  --tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position: ;--tw-gradient-via-position:;
  --tw-gradient-to-position: ;--tw-ordinal:;
  --tw-slashed-zero: ;--tw-numeric-figure:;
  --tw-numeric-spacing: ;--tw-numeric-fraction:;
  --tw-ring-inset: ;--tw-ring-offset-width:0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;--tw-brightness:;
  --tw-contrast: ;--tw-grayscale:;
  --tw-hue-rotate: ;--tw-invert:;
  --tw-saturate: ;--tw-sepia:;
  --tw-drop-shadow: ;--tw-backdrop-blur:;
  --tw-backdrop-brightness: ;--tw-backdrop-contrast:;
  --tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate:;
  --tw-backdrop-invert: ;--tw-backdrop-opacity:;
  --tw-backdrop-saturate: ;--tw-backdrop-sepia:
}`;
export {
    I as D, S as L, A as R, T as a, R as d, E as g, O as m, N as t
};