import React from "react";
import ComposeMail from "./composeMail";
import { timeDifference } from "../../helpers/utility";
import MailAction from "./singleMailActions";
import { tags, tagColor } from "./mailTags.js";
import {
  SingleMailContents,
  SingleMailHeader,
  SingleMailInfo,
  SingleMailBody,
  SingleMailReply
} from "./singleMail.style";

export default function singleMail(
  allMail,
  filterMails,
  index,
  replyMail,
  changeReplyMail,
  selectMail,
  toggleListVisible
) {
  const mail = allMail[index];
  const recpName = mail.name;
  const signature = {
    splitLet: recpName
      .match(/\b(\w)/g)
      .join("")
      .split("", 2)
  };

  const labelColor = mail.tags
    ? tagColor[tags.findIndex(tags => tags === mail.tags)]
    : "";

  return (
    <SingleMailContents className="dlSingleMailContents">
      <MailAction
        mail={mail}
        filterMails={filterMails}
        selectMail={selectMail}
        toggleListVisible={toggleListVisible}
      />
      <div className="dlSingleMail">
        <SingleMailHeader className="dlMailHeader">
          <h2>{mail.subject}</h2>
          <span className="label" style={{ backgroundColor: labelColor }}>
            {mail.tags ? mail.tags : mail.bucket}
          </span>
        </SingleMailHeader>

        <SingleMailInfo className="dlMailInfo">
          <div className="dlRecipentsImg">
            {mail.img ? (
              <img alt="#" src={mail.img} />
            ) : (
              <span>{signature.splitLet}</span>
            )}
          </div>
          <div className="dlMailAddress">
            <div className="dlAddress">
              <h3>
                {mail.name}{" "}
                <span>
                  &lt;
                  {mail.email}
                  &gt;
                </span>
              </h3>
              <span className="mailDate">{timeDifference(mail.date)}</span>
            </div>
            <p>
              to <span>me</span>
            </p>
          </div>
        </SingleMailInfo>

        <SingleMailBody className="dlMailBody">
          <p>{mail.body}</p>
        </SingleMailBody>

        <SingleMailReply className="dlReplyMail">
          {replyMail ? (
            <ComposeMail allMail={allMail} />
          ) : (
            <div
              onClick={event => changeReplyMail(true)}
              className="dlReplyMailBtn"
            >
              Click here to <span>Reply</span>
            </div>
          )}
        </SingleMailReply>
      </div>
    </SingleMailContents>
  );
}
