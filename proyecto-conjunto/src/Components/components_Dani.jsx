import React from 'react';
import './ImageComponent_dani.css';
import PropTypes from 'prop-types';

export const ImageComponent = ({ src, alt, width, height, className }) => {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`my-image-class ${className}`}
        style={{ width: width, height: height }}
      />
    );
  };

  ImageComponent.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
  };