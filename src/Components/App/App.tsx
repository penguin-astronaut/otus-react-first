import React from "react";
import Title from "../Title";
import Text from "../Text";
import CollapseBlock from "../CollapseBlock";
import "./style.scss";

const App = (): JSX.Element => (
  <>
    <Title level={2}>My custom Title</Title>
    <Text>Simple text</Text>
    <Text cursive>Cursive text</Text>
    <Text semiBold>Bold text</Text>
    <Text semiBold cursive>
      cursive bold text
    </Text>
    <CollapseBlock title="Some title">
      <div>Test body block</div>
    </CollapseBlock>
    <CollapseBlock title="Some title collapsed" collapse>
      <div>Test body block</div>
    </CollapseBlock>
  </>
);

export default App;
