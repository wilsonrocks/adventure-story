import React from 'react';
import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

const Story = ({ fullState: { story } }) => (
  <div className="story">
    {story.map((str, index) => <p key={index}>{str}</p>)}
  </div>
);

Story.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
};

export default Story;
