import React from 'react';

class ActivityCard extends React.Component {

    render() {
    return (
      <div class='activity-card'>
        <div class='display-area'>
            <div class="card-title">{this.props.CardTitle}</div>
            <div class="active-date">{this.props.ActiveDate}</div>
            <img class="active-image" src={this.props.ImageUri} alt="placeholder" />
            <div class="active-value">
                <span class="value">{this.props.ActivityValue}</span><span class="unit">{this.props.ActivityUnit}</span>
            </div>
        </div>
      </div>
    );
  }
}

export default ActivityCard;