const enzyme = require('enzyme');
const EnzymeAdapter = require('@wojtekmaj/enzyme-adapter-react-17');

enzyme.configure({ adapter: new EnzymeAdapter() });

if (global.window && global.window.getSelection) {
  global.window.getSelection = () => ({
    removeAllRanges: () => {},
  });
}
