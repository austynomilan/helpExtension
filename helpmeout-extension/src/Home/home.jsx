import React, { useState } from 'react';
import Nav from '../components/Nav/nav';
import Content from '../components/Content/content';

export default function home() {
  const [closeExt, setCloseExt] = useState(true);
  const closeExtention = () => {
    setCloseExt(!closeExt);
  };

  return (
    <>
      {closeExt && (
        <div class='rounded-lg'>
          <Nav closeExtention={closeExtention} />
          <Content />
        </div>
      )}
    </>
  );
}
