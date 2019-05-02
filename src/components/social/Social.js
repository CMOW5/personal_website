import React from 'react';
import './social.css';

const Social = props => (
  <div className="Social">
    {props.social &&
      <ul>
        {props.social.map((item, index) =>
          <li key={`social-${index}`}>
            <a href={item.url} target='_blank' rel="noopener noreferrer">
              <i className={`fab fa-${item.name}`} />
            </a>
          </li>
        )}
      </ul>
    }
  </div>
);

export default Social;

