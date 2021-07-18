import React from 'react';
import Slide from '@material-ui/core/Slide';
import CollectionCard from './CollectionCard.js';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function CollectionForm({data}){
  return (
    <div>
      {data.map(collection => {
        return(
          <div key={collection.id}>
            <CollectionCard collection={collection}/>
          </div>
        )
      })}
    </div>
  )
}

export default CollectionForm;