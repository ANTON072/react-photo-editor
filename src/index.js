import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Sprite, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

import configureStore from './redux/configureStore';
import App from './App';
import CanvasRoot from './containers/CanvasRoot';

const { store, runSaga } = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render(
  <Provider store={store}>
    <Stage width={800} height={600} options={{ backgroundColor: 0xffffff }}>
      <CanvasRoot x={0} y={0} width={800} height={600} fill={0xffff00} />
    </Stage>
  </Provider>,
  document.getElementById('canvas-root')
);
