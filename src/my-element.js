/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from "lit-element";
import "./shared-styles.js";

class MyElement extends LitElement {


  static get properties() {
    return {
      active: { type: Boolean },
      count: { type: Number },
    };
  }

  constructor() {
    super();

    this.active = true;
    this.count = 0;

    // Increment a counter each second. Note that even when render is prevented, javascript will
    // continue to run. When rendering is turned on again at a later time, the values of the
    // properties at that moment are picked up again.
    setInterval(() => {
      this.count += 1;
    }, 1000);
  }

  render() {
    return html`
      Current count: ${this.count}
      <button @click="${() => this.active = !this.active}">
        Toggle active
      </button>
    `;
  }

  // The shouldUpdate function receives a map with keys for the changed properties
  // pointing to their previous values.
  // Based on this, you can decide whether the component should re-render on not. This
  // is useful to for example block re-rendering of the component while it is not active
  // or in view.
  shouldUpdate(changedProperties) {
    return this.active;
  }

}
customElements.define('my-element', MyElement);