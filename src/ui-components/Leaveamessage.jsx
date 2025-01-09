/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";
export default function Leaveamessage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "Leaveamessage")}
      {...rest}
    >
      <Flex
        gap="27px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        boxShadow="0px 0px 20.799999237060547px rgba(0, 0, 0, 0.25)"
        padding="40px 30px 40px 30px"
        backgroundColor="rgba(246,246,246,1)"
        {...getOverrideProps(overrides, "Frame 438")}
      >
        <TextField
          width="300px"
          height="unset"
          label="Leave a message :)"
          gap="15px"
          shrink="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          backgroundColor="rgba(51,166,9,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Button"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
