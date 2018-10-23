import React from "react";
import { Container } from "@devlaunch/ui-container";

export const HtmlTables = () => (
  <Container>
    <section>
      <table>
        <caption>Tables can have captions now.</caption>
        <tbody>
          <tr>
            <th>Person</th>
            <th>Number</th>
            <th>Third Column</th>
          </tr>
          <tr>
            <td>Someone Lastname</td>
            <td>900</td>
            <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
          </tr>
          <tr>
            <td>
              <a href="#Person">Person Name</a>
            </td>
            <td>1200</td>
            <td>
              Vestibulum id ligula porta felis euismod semper. Donec ullamcorper
              nulla non metus auctor fringilla.
            </td>
          </tr>
          <tr>
            <td>Another Person</td>
            <td>1500</td>
            <td>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </td>
          </tr>
          <tr>
            <td>Last One</td>
            <td>2800</td>
            <td>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
              mattis consectetur purus sit amet fermentum.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </Container>
);
