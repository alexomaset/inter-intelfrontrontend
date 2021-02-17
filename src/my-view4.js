/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class MyView4 extends PolymerElement {
  static get properties() {
    return {
      dictionary: {
        type: Object,
      },
    };
  }
  constructor() {
    super();
    this.dictionary = {
      34: "thirty-four",
      90: "ninety",
      91: "ninety-one",
      21: "twenty-one",
      61: "sixty-one",
      9: "nine",
      2: "two",
      6: "six",
      3: "three",
      8: "eight",
      80: "eighty",
      81: "eighty-one",
      "Ninety-Nine": "99",
      "nine-hundred": "900",
    };
  }

  render() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>View Two</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>
          Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto
          suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio
          natum malorum, tibique copiosae expetenda mel ea.
        </p>
      </div>
    `;
  }
}

customElements.define("my-view4", MyView4);
