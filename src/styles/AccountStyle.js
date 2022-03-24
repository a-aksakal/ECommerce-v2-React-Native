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

export const FormGroup = styled(View)`
  padding-top: 48px;
`;

export const FormInput = styled(View)`
  margin-bottom: 45.5px;
`;
export const LocaleText = styled(Text)`
  margin-left: 12px;
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #64738c;
`;
export const FormButton = styled(Button)`
  height: 56px;
  border-radius: 12px;
  margin-bottom: 150px;
`;
