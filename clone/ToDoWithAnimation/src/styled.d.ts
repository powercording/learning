import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    pointColor: string;
    secondColor: string;
    thirdColor: string;
    deadColor: string;
  }
}
