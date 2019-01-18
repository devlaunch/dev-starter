import { AutoComplete } from 'antd';
import { AntAutoComplete } from './styles/autoComplete.style';
import WithDirection from 'settings/withDirection';

const WDAutoCompletes = AntAutoComplete(AutoComplete);
const dlAutoComplete = WithDirection(WDAutoCompletes);
const AutoCompleteOption = AutoComplete.Option;

export { dlAutoComplete, AutoCompleteOption };
