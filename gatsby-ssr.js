const React = require('react');
const ContextProvider = require('./src/context/ContextProvider').default;

exports.wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
);
