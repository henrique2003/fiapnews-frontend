import { createGlobalStyle } from 'styled-components'

// Fonts
// Montserrat
import MontserratBlack from './Montserrat/Montserrat-Black.ttf'
import MontserratBlackItalic from './Montserrat/Montserrat-BlackItalic.ttf'
import MontserratBold from './Montserrat/Montserrat-Bold.ttf'
import MontserratBoldItalic from './Montserrat/Montserrat-BoldItalic.ttf'
import MontserratExtraBold from './Montserrat/Montserrat-ExtraBold.ttf'
import MontserratExtraBoldItalic from './Montserrat/Montserrat-ExtraBoldItalic.ttf'
import MontserratExtralight from './Montserrat/Montserrat-ExtraLight.ttf'
import MontserratItalic from './Montserrat/Montserrat-Italic.ttf'
import MontserratLight from './Montserrat/Montserrat-Light.ttf'
import MontserratLightItalic from './Montserrat/Montserrat-LightItalic.ttf'
import MontserratMedium from './Montserrat/Montserrat-Medium.ttf'
import MontserratMediumItalic from './Montserrat/Montserrat-MediumItalic.ttf'
import MontserratRegular from './Montserrat/Montserrat-Regular.ttf'
import MontserratSemiBold from './Montserrat/Montserrat-SemiBold.ttf'
import MontserratSemiBoldItalic from './Montserrat/Montserrat-SemiBoldItalic.ttf'
import MontserratThin from './Montserrat/Montserrat-Thin.ttf'
import MontserratThinItalic from './Montserrat/Montserrat-ThinItalic.ttf'

// Open_Sans
import OpenSansBold from './Open_Sans/OpenSans-Bold.ttf'
import OpenSansBoldItalic from './Open_Sans/OpenSans-BoldItalic.ttf'
import OpenSansExtraBold from './Open_Sans/OpenSans-ExtraBold.ttf'
import OpenSansExtraBoldItalic from './Open_Sans/OpenSans-ExtraBoldItalic.ttf'
import OpenSansItalic from './Open_Sans/OpenSans-Italic.ttf'
import OpenSansLight from './Open_Sans/OpenSans-Light.ttf'
import OpenSansLightItalic from './Open_Sans/OpenSans-LightItalic.ttf'
import OpenSansRegular from './Open_Sans/OpenSans-Regular.ttf'
import OpenSansSemiBold from './Open_Sans/OpenSans-SemiBold.ttf'
import OpenSansSemiBoldItalic from './Open_Sans/OpenSans-SemiBoldItalic.ttf'

// Roboto
import RobotoBlack from './Roboto/Roboto-Black.ttf'
import RobotoBlackItalic from './Roboto/Roboto-BlackItalic.ttf'
import RobotoBold from './Roboto/Roboto-Bold.ttf'
import RobotoBoldItalic from './Roboto/Roboto-BoldItalic.ttf'
import RobotoItalic from './Roboto/Roboto-Italic.ttf'
import RobotoLight from './Roboto/Roboto-Light.ttf'
import RobotoLightItalic from './Roboto/Roboto-LightItalic.ttf'
import RobotoMedium from './Roboto/Roboto-Medium.ttf'
import RobotoMediumItalic from './Roboto/Roboto-MediumItalic.ttf'
import RobotoRegular from './Roboto/Roboto-Regular.ttf'
import RobotoThin from './Roboto/Roboto-Thin.ttf'
import RobotoThinItalic from './Roboto/Roboto-ThinItalic.ttf'

const FontGlobal = createGlobalStyle`
  @font-face {
    font-family: 'Font Name';
    src: local('Font Name'),
    url(${MontserratBlack}),
    url(${MontserratBlackItalic}),
    url(${MontserratBold}),
    url(${MontserratBoldItalic}),
    url(${MontserratExtraBold}),
    url(${MontserratExtraBoldItalic}),
    url(${MontserratExtralight}),
    url(${MontserratItalic}),
    url(${MontserratLight}),
    url(${MontserratLightItalic}),
    url(${MontserratMedium}),
    url(${MontserratMediumItalic}),
    url(${MontserratRegular}),
    url(${MontserratSemiBold}),
    url(${MontserratSemiBoldItalic}),
    url(${MontserratThin}),
    url(${MontserratThinItalic}),
    url(${OpenSansBold}),
    url(${OpenSansBoldItalic}),
    url(${OpenSansExtraBold}),
    url(${OpenSansExtraBoldItalic}),
    url(${OpenSansItalic}),
    url(${OpenSansLight}),
    url(${OpenSansLightItalic}),
    url(${OpenSansRegular}),
    url(${OpenSansSemiBold}),
    url(${OpenSansSemiBoldItalic})
    url(${RobotoBlack}),
    url(${RobotoBlackItalic}),
    url(${RobotoBold}),
    url(${RobotoBoldItalic}),
    url(${RobotoItalic}),
    url(${RobotoLight}),
    url(${RobotoLightItalic}),
    url(${RobotoMedium}),
    url(${RobotoMediumItalic}),
    url(${RobotoRegular}),
    url(${RobotoThin}),
    url(${RobotoThinItalic}),;
    font-style: normal;
  }
`
export default FontGlobal
