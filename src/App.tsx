import React from 'react';

import Button,{ButtonSize,ButtonType} from './components/Button/button'


function App() {
  return (
    <div className="App">
      <Button disabled>button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>hello</Button>
      <Button btnType={ButtonType.Link} href='www.baidu.com' disabled>百度</Button>
    </div>
  );
}

export default App;
 