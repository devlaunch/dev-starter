import { InputNumber } from 'antd';
import AntInputNumber from './inputNumber.style';
import WithDirection from '../../../../settings/withDirection';

const WDInputnumber = AntInputNumber(InputNumber);
const Inputnumber = WithDirection(WDInputnumber);

export default Inputnumber;
