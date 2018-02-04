import * as React from "react";
import * as ReactDOM from "react-dom";

import { injectGlobal } from "./theme";

import Section from "./components/section";
import Quote from "./components/quote";
import QuoteAuthor from "./components/quote-author";

injectGlobal`
    * { margin: 0; padding: 0; }
`;

interface HelloProps {
  compiler: string;
  framework: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <Section>
        <Quote>
          “I personally would rather do the existentially essential things in
          life on foot. If you live in England and your girlfriend is in Sicily,
          and it is clear you want to marry her, then you should walk to Sicily
          to propose. For these things travel by car or aeroplane is not the
          right thing.”
          <QuoteAuthor>
            Werner Herzog, <em>Of Walking in Ice</em>
          </QuoteAuthor>
        </Quote>
      </Section>
    );
  }
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("app")
);
