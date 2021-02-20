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

class MyView3 extends LitElement {
  static get properties() {
    return {
      myArray: { type: Array },
      dictionary: {type: Object}
    };
  }

  constructor() {
    super();
    this.myArray = [];
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

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const DATA_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((data) => {
        this.myArray = data;
      })
      .catch((e) => alert("Error!"));
      const unDictionary = {...this.dictionary}

      let soDictionary = {}
      
      Object.entries(unsortedDictionary).forEach(([key, value]) =>{
        
        if(isNaN(key) === true){
          soDictionary[value]= key
        }else {
          soDictionary[key] = value
        }
  
      } )
      this.dictionary = soDictionary
      
  }

  render() {
    return html`
      <div class="container">
        ${this.myArray.map(
          ({ title, completed }) =>
            html`
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
              />
              <div class="card">
                <div class="card-body">
                  <div class="card">
                    <div class="card-content">
                      <p class="title">Title: ${title}</p>
                      <p class="subtitle">Completed:${completed}</p>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
            `
        )}
        <div class="column">
        <h1 style="width"><span class="tag">Dictionary</span></h1>
        <table class="table  is-bordered">
  <thead>
    <tr>
      <th>KEY</th>
      <th>VALUE</th>
   
    </tr>
  </thead>
  <tbody>
    ${Object.entries(this.dictionary).map(([key, value]) => html`
    <tr>
    <td>${key}</td>
    <td>${value}</td>
    </tr>
    
    `)}
    </tbody>
    </table>
    </div>
    </div>
      </div>
    `;
  }
}

customElements.define("my-view3", MyView3);
