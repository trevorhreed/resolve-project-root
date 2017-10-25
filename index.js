module.exports = (root) => {
  const path = require('path')
  const originalPathResolve = path.resolve;
  path.resolve = (...parts) => {
    parts = parts.map((part)=>{
      if(part.startsWith('~/')) part = path.join(root, part.substr(2));
      return part;
    });
    return originalPathResolve(...parts);
  }
}
