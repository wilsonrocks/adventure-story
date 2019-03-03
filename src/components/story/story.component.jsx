import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

const Story = ({ fullState: { story }, hide }) => (
  <div className={classnames('story', { hide })}>
    <h2>The Story</h2>
    {story.map((str, index) => <p key={index}>{str}</p>)}
  </div>
);

Story.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
  hide: PropTypes.bool,
};

Story.defaultProps = {
  hide: false,
};

export default Story;
