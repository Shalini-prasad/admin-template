import React from "react";
import boardImage1 from "../../../assets/images/boardImage1.png";
import inWorkImage1 from "../../../assets/images/boardInwork1.png";
import archiveBoard1 from "../../../assets/images/boardarchive1.png";
import qaBoard1 from "../../../assets/images/boardqa1.png";
import qaBoard2 from "../../../assets/images/qaboard2.png";
import BoardFeed from "./BoardFeed/BoardFeed";
import BoardFeedCard from "./BoardFeed/BoardFeedCard/BoardFeedCard";
import "./BoardPage.scss";
import { ReactComponent as TagRight } from "../../../assets/svgs/tagRight.svg";
import { ReactComponent as TicketExpired } from "../../../assets/svgs/ticketExpired.svg";

function BoardPage() {
  const breadcrumbs = [
    { label: "Workspace", link: "/" },
    { label: "Supehub Team", link: "/category" },
    { label: "SupeHub Web Design" },
  ];
  const backlogData = [
    {
      cardTitle: "Research potential tradeshows",
      imgSrc: boardImage1,
      shareCount: "4",
      commentCount: "5",
      Icon: TagRight,
      tag: "green",
    },
    {
      cardTitle: "Develop tradeshow promotions",
      shareCount: "5",
      commentCount: "20",
      cardText: "Review vendor rules and regulations",
      Icon: TagRight,
      tag: "orange",
    },
    {
      cardTitle: "Develop PR strategy",
      shareCount: "2",
      commentCount: "6",
      cardText: "Review lead retrieval system",
      Icon: TagRight,
      tag: "green",
    },
  ];

  const inWorkData = [
    {
      cardTitle: "Review booth resource number limitations",
      cardText: "Determine primary on-site tradeshow contact",
      shareCount: "2",
      commentCount: "4",
      Icon: TicketExpired,
      tag: "red",
    },
    {
      cardTitle: "Product Design Assinment",
      imgSrc: inWorkImage1,
      shareCount: "1",
      commentCount: "13",
      Icon: TagRight,
      tag: "green",
    },
    {
      cardTitle: "Wipe down and disinfect countertops",
      imgSrc: inWorkImage1,
      shareCount: "2",
      commentCount: "6",
      Icon: TagRight,
      tag: "orange",
    },
  ];

  const qaData = [
    {
      cardTitle: "Make a list of Best Talent",
      imgSrc: qaBoard1,
      cardText:
        "We need update the new version of SupeHub for all platforms: Web & App",
      shareCount: "3",
      commentCount: "18",
      Icon: TagRight,
      tag: "green",
    },
    {
      cardTitle: "Determine tradeshow staff",
      imgSrc: qaBoard2,
      cardText: "Tradeshow attire",
      shareCount: "3",
      commentCount: "1",
      Icon: TicketExpired,
      tag: "red",
    },
  ];
  const archiveData = [
    {
      cardTitle: "Review booth specifications",
      cardText: "Design booth appearance and rough layout",
      shareCount: "5",
      commentCount: "9",
      Icon: TagRight,
      tag: "orange",
    },
    {
      cardTitle: "List of sizes and names",
      imgSrc: archiveBoard1,
      cardText: "Research potential tradeshows",
      shareCount: "1",
      commentCount: "2",
      Icon: TagRight,
      tag: "orange",
    },
    {
      cardTitle: "Need more candidates",
      cardText:
        "We need update the new version of SupeHub for all platforms: Web & App",
      shareCount: "1",
      commentCount: "11",
      Icon: TagRight,
      tag: "green",
    },
  ];

  return (
    <div className="board-body">
      <BoardFeed headingTitle="Backlogs" fileCount="3">
        {backlogData.map((data, i) => (
          <BoardFeedCard
            key={i}
            cardTitle={data.cardTitle}
            imgSrc={data.imgSrc}
            cardText={data.cardText}
            shareCount={data.shareCount}
            commentCount={data.commentCount}
            Icon={data.Icon}
            tag={data.tag}
          />
        ))}
      </BoardFeed>
      <BoardFeed headingTitle="In Work" fileCount="3">
        {inWorkData.map((data, i) => (
          <BoardFeedCard
            key={i}
            cardTitle={data.cardTitle}
            imgSrc={data.imgSrc}
            cardText={data.cardText}
            shareCount={data.shareCount}
            commentCount={data.commentCount}
            Icon={data.Icon}
            tag={data.tag}
          />
        ))}
      </BoardFeed>
      <BoardFeed headingTitle="Q & A" fileCount="6">
        {qaData.map((data, i) => (
          <BoardFeedCard
            key={i}
            cardTitle={data.cardTitle}
            imgSrc={data.imgSrc}
            cardText={data.cardText}
            shareCount={data.shareCount}
            commentCount={data.commentCount}
            Icon={data.Icon}
            tag={data.tag}
          />
        ))}
      </BoardFeed>

      <BoardFeed headingTitle="Archive" fileCount="11">
        {archiveData.map((data, i) => (
          <BoardFeedCard
            key={i}
            cardTitle={data.cardTitle}
            imgSrc={data.imgSrc}
            cardText={data.cardText}
            shareCount={data.shareCount}
            commentCount={data.commentCount}
            Icon={data.Icon}
            tag={data.tag}
          />
        ))}
      </BoardFeed>
    </div>
  );
}

export default BoardPage;
