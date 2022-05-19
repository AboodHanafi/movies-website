import styled from "styled-components";
import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
} from "../../Global.Styles";

export const NavigatorContainer = styled(FlexBox)`
  background: #353535;
  height: 50px;
  width: 100%;
`;

export const NavigatorInnerContainer = styled(InnerSection)`
  justify-content: start;
  width: 100%;
  flex-direction: row;
`;

export const NavigatorSpan = styled.div`
  font-size: 18px;
  margin-left: 8px;
  display: flex;
  color: #fff;

  justify-content: start;
  align-items: start;
  cursor: pointer;
`;

export const MovieInfoBox = styled(InnerSection)`
  justify-content: start;
  align-items: start;
  background: #000000b3;
  flex-direction: row;
  padding: 0;
  width: 100%;
  margin: auto 0;
`;

export const MovieImage = styled.img`
  width: 25%;
  height: 100%;
  object-fit: cover;
  background: none;
`;

export const MovieDetailsBox = styled(FlexColumn)`
  height: 100%;
  justify-content: start;
  align-items: start;
  padding: 35px 25px;
  color: #fff;
`;

export const InfoText = styled.span((props) => ({
  fontSize: props.fontSize ? props.fontSize : 18,
  fontWeight: props.fontWeight ? props.fontWeight : 500,
  margin: props.margin ? props.margin : "0",
  width: "100%",
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
}));

export const ProgressBar = styled(FlexColumn)`
  height: 10px;
  width: 180px;
  background: #fff;
  border-radius: 20px;
  justify-content: start;
  align-items: start;
`;

export const ProgressBarPercentage = styled(ProgressBar)((props) => ({
  background: "#16D47B",
  width: props.width + "%",
}));

export const ProgressBarContainer = styled(FlexRow)`
  justify-content: start;
  margin-bottom: 40px;
`;
