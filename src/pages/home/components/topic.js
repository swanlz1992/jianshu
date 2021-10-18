import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";
class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {topicList.map((item) => (
          <TopicItem key={item.get("id")}>
            <img src={item.get("url")} alt="" className="itemImg" />
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}

const allState = (state) => ({
  topicList: state.getIn(["home", "topicList"]),
});
export default connect(allState, null)(Topic);
