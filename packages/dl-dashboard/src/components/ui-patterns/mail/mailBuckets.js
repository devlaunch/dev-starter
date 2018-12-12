import React from "react";
import MailBucket from "./mailBucket.style";

const buckets = [
  "Inbox",
  "Sent",
  "Drafts",
  "Trash",
  "Important",
  "spam",
  "Starred"
];

function getUnread(mails) {
  const unread = {};
  mails.forEach(mail => {
    if (!unread[mail.bucket]) {
      unread[mail.bucket] = 0;
    }
    if (!mail.read) {
      unread[mail.bucket] += 1;
    }
  });
  return unread;
}

export default function mailbuckets(
  mails,
  filterAction,
  filterAttr,
  onDrawerClose
) {
  const unread = getUnread(mails);
  const renderSinglebucket = (bucket, key) => {
    const onClick = () => {
      filterAction({ bucket });
      if (onDrawerClose) {
        onDrawerClose();
      }
    };
    const selectedBucket = bucket === filterAttr.bucket;
    const activeClass = selectedBucket ? "active" : "";
    return (
      <li
        key={`bucket${key}`}
        onClick={onClick}
        className={`dlSingleBucket ${activeClass}`}
      >
        <span>{bucket}</span>
        <span className="dlMailBadge">
          {unread[bucket] ? unread[bucket] : ""}
        </span>
      </li>
    );
  };
  return (
    <MailBucket className="dlBucketList">
      {buckets.map((bucket, index) => renderSinglebucket(bucket, index))}
    </MailBucket>
  );
}
export { buckets };
