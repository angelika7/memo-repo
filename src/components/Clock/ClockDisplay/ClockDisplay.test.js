import React from 'react';
import { shallow } from "enzyme";
import Clock from './ClockDisplay';
import ClockDisplay from './../Clock';
import Button from './../../Buttons/Button/Button';
import App from './../../../App';

const clock = shallow(<Clock />);
const clockDisplay = shallow(<ClockDisplay />);

describe('the rendered <ClockDisplay />', () => {
    const clockDisplay = shallow(<ClockDisplay />)

    it('receives state.endMemo as a "endMemo" prop', () => {
        expect(clockDisplay.prop('endMemo')).toEqual(clock.state('endMemo'));
    })
})

describe('the rendered <Button />', () => {
    const btn = shallow(<Button />);
    const app = shallow(<App />);

    it('receives saveRes as "onClick" prop', () => {
        expect(btn.prop('onClick')).toEqual(clock.saveEndGameResultHandler)
    });

    it('receives saveRes as "onClick" prop', () => {
        expect(btn.prop('onClick')).toEqual(clockDisplay.hideBox)
    });

    it('receives saveRes as "onClick" prop', () => {
        expect(btn.prop('onClick')).toEqual(app.isNewHandler)
    })
})