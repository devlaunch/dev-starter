import { Pagination } from "antd";
import AntPagination from "./pagination.style";
import WithDirection from "../../../../settings/withDirection";

const Paginations = AntPagination(Pagination);
const dlPagination = WithDirection(Paginations);

export default dlPagination;
