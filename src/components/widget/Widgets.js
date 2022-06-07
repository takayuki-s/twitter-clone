import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1531923684801163264"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Shin_Engineer"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/Shin_Engineer"}
          options={{ text: "#reactjs is awesome", via: "Shin_Engineer" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
