import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import styled from "styled-components";

export const Container = styled(View)`
  padding-top: 92px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const AccountHeader = styled(Text)`
  /* H1 / 32 */

  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  /* or 131% */

  letter-spacing: 0.1px;

  /* Black %100 */

  color: #121212;
`;
export const  Name = styled(Text)`

margin-top:34px;
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 49px;
letter-spacing: 0.1px;
color: #000000;


`;
export const DetailsGroup = styled(View)`
margin-top:32px;
    
margin-bottom:12px;
`
export const Details = styled(Text)`
    
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 29px;
    

    color: #000000;

`;

export const ButtonGroup = styled(View)`
  margin-top:240px;


`
export const LocaleText = styled(Text)
`
margin-top:23px;
margin-bottom:12px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #64738C;
`

export const FormButton = styled(Button)`
  height: 56px;
  border-radius: 12px;
`;

export const Line = styled(View)
`
margin-top:18px;
border: 1px solid #E6E6E6;

`