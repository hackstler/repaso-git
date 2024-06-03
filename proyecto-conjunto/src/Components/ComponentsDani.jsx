import React from 'react';
import PropTypes from 'prop-types';
import { Image, Box, ChakraProvider, extendTheme } from '@chakra-ui/react';

// Define los estilos personalizados usando extendTheme si es necesario
const theme = extendTheme({
  styles: {
    global: {
      '.my-image-class': {
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
});

const ImageComponent = ({ src, alt, width, height, className }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`my-image-class ${className}`}
        />
      </Box>
    </ChakraProvider>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

// Ejemplo de cómo utilizar ImageComponent en tu aplicación
const Images = () => {
  return (
    <ImageComponent
      src="https://example.com/image.jpg"
      alt="Description of image"
      width="300px"
      height="200px"
      className="additional-class"
    />
  );
};

export default Images;
