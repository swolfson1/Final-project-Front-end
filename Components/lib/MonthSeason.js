import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import MonthAvatar from "./MonthAvatar";
import styled from "styled-components";

const MonthSeason = () => {

    return (
        <Container>
            <Title>SEASONAL AVALIBILITY</Title>

            <Textfield>
                Check it out in Sweden........avalible these months
        </Textfield>
            <MonthAvatarView>
                <MonthAvatar />
            </MonthAvatarView>
        </Container>
    );

}


const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120%;
  height: 357px;
  border-radius: 8px;
  background-color: #BDE7FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
//add font-family: Poppins;
const Title = styled.Text`
display: flex;
flex-direction: row;
position: absolute;
left: 40.2%;
right: 0%;
top: 5.81%;
bottom: 81.87%;


font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #FFFCFC;
`
//font-family: Eczar;
const Textfield = styled.Text`
position: absolute;
left: 17.07%;
right: 16.8%;
top: 19.73%;
bottom: 57.98%;

font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 25px;
text-align: center;
color: #111010;
`
const MonthAvatarView = styled.View`
position: absolute;
width: 294px;
height: 153px;
left: 20px;
top: 150px;
`
export default MonthSeason