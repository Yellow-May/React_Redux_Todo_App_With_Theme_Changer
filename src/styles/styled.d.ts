import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        bgDesk: string,
		bgMob: string,
        bgPrimary: string,
        bgSecondary: string,
        txtPrimary: string,
        txtSecondary: string,
        txtHover: string,
        borderPrimary: string,
        checkBorder: string,
        wrapperShadow: string,
    }
}