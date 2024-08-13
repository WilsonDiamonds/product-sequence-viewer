import { FALSY_VALUES } from '../../constants/falsy-values';
import { getResponsiveWidthOfContainer } from '../responsive/get-responsive-width-of-container';
import { getSizeAccordingToPixelRatio } from '../responsive/get-size-according-to-pixel-ratio';
import { pad } from '../../utils/load-images/pad';

export const generateImagesPath = (srcConfig) => {
    const { folder, amount, indexZeroBase } = srcConfig;
    const maybeBase64 = JSON.parse(folder)
    if (Array.isArray(maybeBase64)) {
      return maybeBase64; // Return the array of base64 images directly
    }
  
    return [...new Array(amount)].map((_item, index) => {
      const nextZeroFilledIndex = pad(index + 1, indexZeroBase);
      return `${folder}${nextZeroFilledIndex}.jpg`;
    });
  };
  