require('@babel/register')({
    extensions: ['.ts', '.js'],
  });
  
  module.exports = require('./gatsby-node.ts');
  