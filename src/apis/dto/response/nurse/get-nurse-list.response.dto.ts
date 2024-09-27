import { Nurse } from "src/types";
import ResponseDto from "../response.dto";

// interface: get nurse list respnose body dto // 
export default interface GetNurseListResponseDto extends ResponseDto {
    nurses: Nurse[];
}