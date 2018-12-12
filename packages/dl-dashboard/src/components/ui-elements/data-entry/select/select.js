import { Select } from "antd";
import { AntSelect } from "./select.style";
import WithDirection from "../../../../settings/withDirection";

const WDSelect = AntSelect(Select);
const dlSelect = WithDirection(WDSelect);
const SelectOption = Select.Option;

export default dlSelect;
export { SelectOption };
