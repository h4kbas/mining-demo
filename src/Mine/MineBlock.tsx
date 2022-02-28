import React from 'react';

interface IMineBlockProps{
  number: number;
}

function MineBlock(props:IMineBlockProps) {
  return (
    <div className="MineBlock basis-1/12 p-10 mr-1 mb-1 border-solid border-2 border-black-500">

    </div>
  );
}

export default MineBlock;
