// to overrite types

import 'styled-components';
import theme from './theme';


// Add custom theme to DefaultTheme in styled components
declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {}
}