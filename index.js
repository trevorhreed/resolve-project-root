const path = require('path')
const originalPathResolve = path.resolve;
module.exports = (root) => {
  if(!root) root == process.cwd();
  if(root[0] !== '/') root = originalPathResolve(root);
  path.resolve = (...parts) => {
    parts = parts.map((part)=>{
      if(part.startsWith('~/')) part = path.join(root, part.substr(2));
      return part;
    });
    return originalPathResolve(...parts);
  }
}
