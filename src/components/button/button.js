import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

const Button = ({
  children, onClick, imgSrc, className, disabled, active, ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } 
    if (!active) {
        active = true;   
        console.log(' клик ');
    }
    
    else {
        
     
      return onClick(e);
    }
  };

  const classes = classNames(
    'cart-icon',
    className,
    { active },
  );

//   const Tag = attrs.href ? 'a' : 'button';

  return (
    <div
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
          <img       onClick={onClickAction}
            className=""
            src={imgSrc}
            alt="icon"
          />
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default Button;