import React, { useState } from 'react';
import GetAllRecords from './GetAllRecords';
import PostRecord from './PostRecord';
import DeleteRecord from './DeleteRecord';
import GetOneRecord from './GetOneRecord';
import UpdateRecord from './UpdateRecord';
import Header from './Header';

const Body = () => {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <div>
      <Header onSelectForm={setActiveForm} />
      <main>
        {activeForm === 'showAll' && <GetAllRecords />}
        {activeForm === 'upload' && <PostRecord />}
        {activeForm === 'getOne' && <GetOneRecord />}
        {activeForm === 'delete' && <DeleteRecord />}
        {activeForm === 'update' && <UpdateRecord />}
      </main>
    </div>
  );
};

export default Body;
