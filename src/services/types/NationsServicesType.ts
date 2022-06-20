type URL = string;

export interface NationsResponse {
  currentCount: number;
  data: NationsData[];
  numOfRows: number;
  pageNo: number;
  resultCode: number;
  resultMsg: string;
  totalCount: number;
}

export interface NationsData {
  alarm_lvl: number;
  continent_cd: string;
  continent_eng_nm: string; // 영어이름
  continent_nm: string; // 대륙이름
  country_eng_nm: string; // 국가영어이름
  country_iso_alp2: string; // iso 국가 코드
  country_nm: string; // 국가한국이름
  dang_map_download_url: URL;
  flag_download_url: URL;
  map_download_url: URL;
  region_ty: string;
  remark: string;
  written_dt: string;
}
