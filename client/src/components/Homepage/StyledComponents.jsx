import styled from "styled-components";

export const Match = styled.a`
  display: block;
  min-height: 102px;
  font-size: 14px;
  letter-spacing: normal;
  line-height: 15.4px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  margin: 10px 20px;
`;

export const MatchTop = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  color: #777;
  font-size: 13px;
`;

export const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MatchInfoData = styled.div`
  text-align: center;
`;

export const MatchName = styled.span`
  display: inline-block;
`;

export const MatchRelated = styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
`;

export const MatchBase = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 1px;
  color: #444;
`;

export const TeamHome = styled.div`
  flex-direction: row;
  order: 1;
  align-items: center;
  display: flex;
  flex: 1 0 30%;
  justify-content: flex-end;
  position: relative;
`;

export const TeamHomeName = styled.div`
  text-align: right;
`;

export const TeamHomeImg = styled.img`
  height: 35px;
  margin-left: 7px;
`;

export const TeamAway = styled.div`
  flex-direction: row-reverse;
  order: 3;
  align-items: center;
  display: flex;
  flex: 1 0 30%;
  justify-content: flex-end;
  position: relative;
`;

export const TeamAwayName = styled.div`
  text-align: left;
`;

export const TeamAwayImg = styled.img`
  height: 35px;
  margin-right: 7px;
`;

export const MatchTime = styled.div`
  order: 2;
  margin-bottom: 0px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 0px;
`;

//Match Vote
export const MatchModal = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  letter-spacing: 1px;
`;

export const MatchModalText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  color: blue;
  font-size: 13px;
`;

//Match After Vote

export const MatchVotedContainer = styled.div``;

export const MatchModalVoted = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const MatchVotedResult = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
export const MatchVotedMessage = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  color: blue;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const MatchVotedHome = styled.span`
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 15px;
`;
export const MatchVotedAway = styled.span`
  font-weight: 500;
  letter-spacing: 1px;
`;
export const MatchVotedDivisor = styled.span`
  margin: 0 15px;
`;

//Match Result
export const MatchVs = styled.span``;

export const MatchResult = styled.div``;
export const MatchPointHome = styled.span``;
export const MatchPointAway = styled.span``;
export const MatchPointDivisor = styled.span``;
