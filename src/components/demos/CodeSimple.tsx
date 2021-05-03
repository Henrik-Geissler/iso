import React from 'react'
import {Code} from 'handy-ui'

const CodeSimple = (): JSX.Element => {
    return (<Code lang='css'>
{`@main-color: red;
.foo {
  /** red background **/
  background: @main-color;
}`}
</Code>
    );
}

export default CodeSimple;
