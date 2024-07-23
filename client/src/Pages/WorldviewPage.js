import React, { useState } from 'react';
import MapChart from './MapChart_Map';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const WorldviewPage = () => {
  const [cursorStyle, setCursorStyle] = useState('auto');

  const handleZoom = (e) => {
    const value = e.state.scale;
    setCursorStyle(value > 1 ? 'grab' : 'auto');
  }
  return (
    <div className='map'>
      <TransformWrapper
        initialScale={1.6}
        minScale={1}
        disabled={false}
        limitToBounds={false}
        onZoom={(value) => handleZoom(value)}
      >
        <TransformComponent>
          <div className='svg-container' style={{ cursor: cursorStyle }}>
            <MapChart />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default WorldviewPage;
