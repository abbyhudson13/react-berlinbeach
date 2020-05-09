import React from 'react';
import Beach from './beach';

const BeachList = (props) => {
  const renderList = () => {
    return props.beaches.map((beach, index) => {
      return (
        <Beach
          beach={beach}
          key={beach.lat}
          selected={beach.name === props.selectedBeach.name}
          index={index}
          selectBeach={props.selectBeach}
        />
      );
    });
  };

  return (
    <div className="beach-list">
      {renderList()}
    </div>
  );
};

export default BeachList;
