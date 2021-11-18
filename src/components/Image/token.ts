import { addClasses, withDesign, addProps } from '@bodiless/fclasses';

const withImageRoundedCorners = addClasses('rounded-2xl');

const withGatsbyImageRoundedCorners = withDesign({
  GatsbyImage: addProps({
    imgStyle: {
      borderRadius: '1rem',
    },
  }),
  Image: withImageRoundedCorners,
});

export {
  withImageRoundedCorners,
  withGatsbyImageRoundedCorners,
};