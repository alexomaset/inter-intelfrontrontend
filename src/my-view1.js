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

class MyView1 extends LitElement {
  static get properties() {
    return {
      form1: { type: Object },
    };
  }

  static get styles() {
    return css`
      .button {
        border-radius: 0;
        border: none;
      }
      .card-content.login {
        background-color: #f9f6f6;
        border: none;
        height: 400px;
        padding: 20px;
      }
      .card-footer-item.register {
        background-color: #284863;
        color: white;
      }
      .input {
        border-width: 1px;
        border-radius: 15px;
      }
      .card-footer {
        border: none;
      }
      .label {
        font-weight: lighter;
      }
    `;
  }

  constructor() {
    super();
    this.form1 = {};
  }

  render() {
    return html`
      <form id="my-form">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
        />
        <div class="card">
          <div class="card-content">
            <p class="title">Already a member?</p>
            <p class="subtitle">Sign in to continue.</p>
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  class="input is-primary"
                  @change=${this.handleChange}
                  autocomplete="off"
                  placeholder="name"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input is-primary"
                  @change=${this.handleChange}
                  autocomplete="off"
                  placeholder="email"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Phone Number</label>
              <div class="control">
                <input
                  class="input is-primary"
                  @change=${this.handleChange}
                  autocomplete="off"
                  placeholder="phone number"
                  type="tel"
                  name="phonenumber"
                />
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button @click=${this.handleSubmit} class="button is-link">
                  Submit
                </button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.form1);
    alert(JSON.stringify(this.form1));
    this.clearInputs();
  }
  clearInputs() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((item) => (item.value = ""));
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.form1[name] = value;
  }
}

customElements.define("my-view1", MyView1);
