import React from 'react';
import styles from './<%= blockName %>.<%= stylesExtension %>';

class <%= blockName %> extends React.Component {
  render() {
    return (
      <div className={ styles.<%= blockName %> }>

      </div>
    )
  }
}

export default <%= blockName %>;
