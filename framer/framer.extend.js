Framer.DeviceComponent.prototype._deviceImageUrl = function(name) {
  var ref, resourceUrl;

  if (!name) {
    return null;
  }

  if (_.startsWith(name, 'http://') || _.startsWith(name, 'https://')) {
    return name;
  }

  resourceUrl = 'https://resources.framerjs.com/static/DeviceResources';

  if (Utils.isFramerStudio() && window.FramerStudioInfo) {
    if (this._device.minStudioVersion && Utils.framerStudioVersion() >= this._device.minStudioVersion || !this._device.minStudioVersion) {
      if (this._device.maxStudioVersion && Utils.framerStudioVersion() <= this._device.maxStudioVersion || !this._device.maxStudioVersion) {
        resourceUrl = window.FramerStudioInfo.deviceImagesUrl;
      }
    }
  }

  if (Utils.isJP2Supported() && this._device.deviceImageJP2 === true) {
    return resourceUrl + '/' + (name.replace('.png', '.jp2'));
  }
  
  return resourceUrl + '/' + name;
};
