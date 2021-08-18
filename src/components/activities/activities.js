import React from 'react';

// CSS
import '../activity-card/activity-card.scss';

// JS
import ActivityCard from '../activity-card/activity-card.js';


class Activities extends React.Component {

    // 初期化時
    constructor(props) {
        super(props);
        this.state = { 
            items:[]
        };
    }

    // レンダリング時
    render() {
        
        // アクティビティの作成
        let activities = this.state.items;
        var cards = activities.map((activitiy) => {
            return (
            <ActivityCard CardTitle={activitiy.CardTitle} ActiveDate={activitiy.ActiveDate} ImageUri={activitiy.ImageUri} ActivityValue={activitiy.ActivityValue} ActivityUnit={activitiy.ActivityUnit}/>)  
        })

        return (
            <div class="activity-cards">
                {cards}
            </div>
        );
    }

    /*
        Ajax を使ったデータフェッチを行う（初回）
        DOM に対する処理を行う（初回）
        タイマーをセットする
        イベントリスナのセット
        https://iktakahiro.hatenablog.com/entry/2018/05/28/123000
    */
    componentDidMount() { 

        const activities = [
            { CardTitle:"活動履歴", ActiveDate:"8/9", ImageUri:"https://unsplash.it/g/630/400/", ActivityValue:"0.96", ActivityUnit:"km" },
            { CardTitle:"ハート", ActiveDate:"8/17", ImageUri:"https://unsplash.it/g/630/400/", ActivityValue:"66", ActivityUnit:"bpm" },
            { CardTitle:"体重管理", ActiveDate:"8/5", ImageUri:"https://unsplash.it/g/630/400/", ActivityValue:"72.8", ActivityUnit:"kg" },
            { CardTitle:"睡眠", ActiveDate:"8/2", ImageUri:`${process.env.PUBLIC_URL}/bed.svg`, ActivityValue:"38", ActivityUnit:"分" },
            { CardTitle:"血中酸素", ActiveDate:"8/18", ImageUri:"https://unsplash.it/g/630/400/", ActivityValue:"100", ActivityUnit:"%" },
            { CardTitle:"ストレス", ActiveDate:"8/18", ImageUri:"https://unsplash.it/g/630/400/", ActivityValue:"33", ActivityUnit:"普通" },
        ];

        // 
        this.setState({
            items: activities
        });
    }

    /*
        Ajax を使ったデータフェッチを行う（二回目以降）
        DOM に対する処理（二回目以降）
        その他諸々
        https://iktakahiro.hatenablog.com/entry/2018/05/28/123000
    */
    componentDidUpdate(){

    }

    /*
        タイマーを解除する
        イベントリスナを解除する
        非同期処理を中止する
        https://iktakahiro.hatenablog.com/entry/2018/05/28/123000
    */
    componentWillUnmount(){

    }
}

export default Activities;