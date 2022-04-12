import React from 'react';

const Tag = ({ tag, handleTagClicked }: { tag: string; handleTagClicked: Function }) => {
  const clickTag = (tag: string) => {
    handleTagClicked(tag);
  };

  return (
    <div
      style={{ cursor: 'pointer' }}
      className="tag-pill tag-default"
      onClick={() => clickTag(tag)}
    >
      {tag}
    </div>
  );
};

export default Tag;
