import { FC, JSX } from "react";
import { BirthdateProps } from "../data/birthdays";

const CountdownTimer: FC<BirthdateProps> = ({ birthdates: props }): JSX.Element => {

    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row flex-wrap">
            <h1>Birthday Countdown</h1>
            <p>As an intern years ago, my first dynamic JavaScript project was to build a countdown timer for an events page. I developed my original draft from that time on my Codepen <a href="https://codepen.io/codechelle/pen/yLbZpoX">here</a>. Let's build one in React!</p>
        </div>
    );
}

export default CountdownTimer;