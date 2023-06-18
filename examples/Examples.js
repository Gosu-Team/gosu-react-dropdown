import React from "react";
import Dropdown from "../dist/index";

export default function Examples() {
  const options = [
    { key: '1', value: <div>🇺🇸 English</div>, label: <div>🇺🇸</div> },
    { key: '2', value: <div>🇵🇹 Português </div>, label: <div>🇵🇹</div> },
    { key: '3', value: <div>🇩🇪 Deutsch</div>, label: <div>🇩🇪</div> },
    { key: '4', value: <div>🇵🇱 Polski</div>, label: <div>🇵🇱</div> },
    { key: '5', value: <div>🇺🇦 Україньскою</div>, label: <div>🇺🇦</div> },
  ]


  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    ddRoot: {
      marginLeft: '80px',
    },
    ddList: {
      backgroundColor: 'red'
    }
  };


  return (
    <div style={styles.root}>
      <h1>Dropdown</h1>
      <Dropdown
        defaultSelectedKey="1" 
        listPlacement="bottomRight" 
        options={options}
        styleRoot={styles.ddRoot}
        styleList={styles.ddList}
      />
      <h2>Dropdown</h2>

    </div>
  );
}
