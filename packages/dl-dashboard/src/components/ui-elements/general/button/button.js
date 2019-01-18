import { Button } from 'antd';
import { Buttons, ButtonsGroup } from './button.style';
import WithDirection from 'settings/withDirection';

const AntButton = Buttons(Button);
export const dlButton = WithDirection(AntButton);

const AntButtonGroup = ButtonsGroup(Button.Group);
export const ButtonGroup = WithDirection(AntButtonGroup);
