import React from 'react';
import MineBlock from './MineBlock';
function MineGrid() {
  return (
    <div className="MineGrid flex flex-row flex-wrap justify-center">
        {Array(99).fill(0).map((x, i)=> (<MineBlock number={i} />))}
    </div>
  );
}

export default MineGrid;
