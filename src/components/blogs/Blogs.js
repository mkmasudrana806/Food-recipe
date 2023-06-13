import React from "react";
import "./blogs.css";
import { Button } from "react-bootstrap";
import html2pdf from 'html2pdf.js';


const Blogs = () => {
  const downloadAsPDF = () => {
    const element = document.getElementById("content-blog");
    html2pdf().from(element).save();
  };
  return (
    <div className="container articles">
      <Button className="btn-primary mt-3" onClick={downloadAsPDF}>
        Download as PDF
      </Button>
      <div id="content-blog">
        <article>
          <h3>differences between uncontrolled and controlled components</h3>
          <ul>
            <li>
              <strong>Control:</strong> Controlled components are controlled by
              the component's state, whereas uncontrolled components manage
              their own state.
            </li>
            <li>
              {" "}
              <strong>State Management:</strong> Controlled components rely on
              explicit state updates to reflect changes, while uncontrolled
              components automatically update their values in the DOM.{" "}
            </li>
            <li>
              {" "}
              <strong>Validation and Modification:</strong> Controlled
              components allow for validation and modification of user input
              before updating the state, while uncontrolled components do not
              provide such capabilities.
            </li>{" "}
            <li>
              {" "}
              <strong>Code Complexity:</strong> Controlled components require
              more code and event handlers to manage state and update values,
              making them slightly more complex. Uncontrolled components are
              simpler and require less code.
            </li>
            <li>
              <strong>Direct DOM Access:</strong> Uncontrolled components
              provide direct access to the underlying DOM elements, allowing for
              more flexibility when interacting with the DOM.
            </li>
          </ul>
        </article>
        <article>
          <h3>How to validate React props using PropTypes</h3>
          <p>
            To validate React props, you can make use of the PropTypes library,
            which is typically included as part of the React package. PropTypes
            allows you to specify the expected types and other constraints for
            the props passed to a component.
          </p>
        </article>
        <article>
          <h3>difference between nodejs and express js</h3>
          <p>
            <strong>NodeJs: </strong>
          </p>
          <ul>
            <li>
              Node.js is a runtime environment that allows developers to run
              JavaScript on the server-side.
            </li>
            <li>
              It provides an event-driven, non-blocking I/O model, which makes
              it highly efficient and scalable for building network
              applications.
            </li>
            <li>
              Node.js is built on the V8 JavaScript engine, the same engine that
              powers Google Chrome, and it allows you to use JavaScript for both
              front-end and back-end development.
            </li>
            <li>
              With Node.js, you can build web servers, APIs, real-time
              applications, microservices, command-line tools, and more.
            </li>
          </ul>
          <p>
            <strong>NodeJs: </strong>
          </p>
          <ul>
            <li>
              Express.js is a web application framework built on top of Node.js.
              It provides a set of features and abstractions to simplify the
              development of web applications and APIs.
            </li>
            <li>
              It is a minimalist framework that focuses on providing a thin
              layer of web application functionality, allowing developers to
              have more control and flexibility in building their applications.
            </li>
            <li>
              Express.js provides a robust routing system, middleware support,
              and template engine integration.
            </li>
            <li>
              Express.js is often used to build RESTful APIs, single-page
              applications, and server-side rendered applications.
            </li>
          </ul>
        </article>
        <article>
          <h3>What is a custom hook, and why will you create a custom hook?</h3>
          <p>
            A custom hook in React is a JavaScript function that allows you to
            reuse stateful logic and share it between components. Custom hooks
            are a way to extract and organize common logic so that it can be
            easily reused across multiple components in a React application.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
