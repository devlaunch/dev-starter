import React from "react";
import { Container } from "@devlaunch/ui-container";

export const HtmlForm = () => (
  <Container>
    {" "}
    <section>
      <form>
        <p>
          <label htmlFor="example-input-email">Email address</label>
          <input
            type="email"
            id="example-input-email"
            placeholder="Enter email"
            autoComplete="email"
          />
        </p>
        <p>
          <label htmlFor="example-input-number">Number</label>
          <input type="number" id="example-input-number" placeholder="Number" />
        </p>
        <p>
          <label htmlFor="example-input-password">Password</label>
          <input
            type="password"
            id="example-input-password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </p>
        <p>
          <label htmlFor="example-input-search">Search</label>
          <input
            type="search"
            id="example-input-serach"
            placeholder="Search .."
          />
        </p>
        <p>
          <label htmlFor="example-input-tel">Telephone number</label>
          <input
            type="tel"
            id="example-input-tel"
            placeholder="Telephone number"
          />
        </p>

        <p>
          <label htmlFor="example-input-text">Text</label>
          <input
            type="text"
            id="example-input-text"
            placeholder="Enter some text here"
          />
        </p>
        <p>
          <label htmlFor="example-input-url">Url</label>
          <input
            type="url"
            id="example-input-url"
            placeholder="Enter a url here"
          />
        </p>
        <p>
          <label htmlFor="example-input-color">Color</label>
          <input type="color" id="example-inupt-color" placeholder="#fff" />
        </p>
        <p>
          <label htmlFor="example-input-date">Date</label>
          <input type="date" id="example-input-date" placeholder="date" />
        </p>
        <p>
          <label htmlFor="example-input-date-time">Date / Time</label>
          <input
            type="datetime"
            id="example-input-date-time"
            placeholder="date / time"
          />
        </p>
        <p>
          <label htmlFor="example-input-date-time-local">
            Date / Time local
          </label>
          <input
            type="datetime-local"
            id="example-input-date-time-local"
            placeholder="date / time local"
          />
        </p>
        <p>
          <label htmlFor="example-input-month">Month</label>
          <input type="month" id="example-input-month" placeholder="Month" />
        </p>
        <p>
          <label htmlFor="example-input-week">Week</label>
          <input type="week" id="example-input-week" placeholder="Week" />
        </p>
        <p>
          <label htmlFor="example-input-time">Time</label>
          <input type="time" id="example-input-time" placeholder="Time" />
        </p>
        <p>
          <label htmlFor="example-select1">Example select</label>
          <select id="example-select1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </p>
        <p>
          <label htmlFor="example-select2">Example multiple select</label>
          <select multiple id="example-select2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </p>
        <p>
          <label htmlFor="example-textarea">Example textarea</label>
          <textarea id="example-textarea" rows="3" />
        </p>
        <p>
          <label htmlFor="example-input-file">File input</label>
          <input type="file" id="example-input-file" />
        </p>
        <fieldset>
          <legend>I am legend</legend>
          <div>
            <label>
              <input
                type="radio"
                name="options-radios"
                id="optionsR-radios1"
                value="option1"
                checked
                readOnly
              />{" "}
              Option one is this and that&mdash;be sure to include why it's
              great
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="options-radios"
                id="options-radios2"
                value="option2"
              />{" "}
              Option two can be something else and selecting it will deselect
              option one
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="optionsRadios"
                id="options-radios3"
                value="option3"
                disabled
              />{" "}
              Option three is disabled
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>I am also legend</legend>
          <input type="checkbox" /> Check me out
          <input type="checkbox" /> Or check me out
        </fieldset>
        <p>
          <button type="button" name="button">
            Button
          </button>
          <input type="button" name="input" value="Input Button" />
          <input type="submit" name="submit" value="Submit Button" />
          <input type="reset" name="reset" value="Reset Button" />
        </p>
      </form>
    </section>
  </Container>
);
