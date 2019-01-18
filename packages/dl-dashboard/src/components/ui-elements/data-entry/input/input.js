import { Input } from 'antd';
import {
  InputWrapper,
  InputGroupWrapper,
  InputSearchWrapper,
  TextAreaWrapper,
} from './input.style';
import WithDirection from 'settings/withDirection';

const { Search, TextArea, Group } = Input;

const WDdlInput = InputWrapper(Input);
const dlInput = WithDirection(WDdlInput);

const WDInputGroup = InputGroupWrapper(Group);
const InputGroup = WithDirection(WDInputGroup);

const WDInputSearch = InputSearchWrapper(Search);
const InputSearch = WithDirection(WDInputSearch);

const WDTextarea = TextAreaWrapper(TextArea);
const Textarea = WithDirection(WDTextarea);

export { dlInput, InputSearch, InputGroup, Textarea };
