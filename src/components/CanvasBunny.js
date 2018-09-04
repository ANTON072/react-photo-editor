import React from 'react';
import { Sprite, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

import bunny from '../assets/bunny.png';

export default function Bunny(props) {
  return <Sprite texture={PIXI.Texture.fromImage(bunny)} {...props} />;
}
