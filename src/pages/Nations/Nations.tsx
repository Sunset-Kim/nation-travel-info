import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import NationService from '../../services/NationService';
import reactQueryConfig from '../../configs/ReactqueryConfig';
import { NationsResponse } from '../../services/types/NationsServicesType';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ISO 코드' },
  { field: '나라이름', headerName: '나라이름', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const makeNationRow = (data: NationsResponse) =>
  data?.data?.map((row) => ({
    id: row.country_iso_alp2,
    나라이름: row.country_nm,
    나라이름영문: row.country_eng_nm,
    대륙이름: row.continent_nm,
    대륙이름영문: row.continent_eng_nm,
    위험지도: row.dang_map_download_url,
    국기: row.flag_download_url,
    지도: row.map_download_url,
    경보단계: row.alarm_lvl,
    지역유형: row.region_ty,
    작성일: row.written_dt,
  }));

const nationsService = NationService;

const Nations: React.FC = () => {
  const { data, isError, isLoading } = useQuery(
    ['@nations'],
    () => nationsService.getTravelAlarmList(),
    reactQueryConfig
  );

  const rows = data && makeNationRow(data as NationsResponse);

  return (
    <div style={{ height: 800, width: '100%', color: 'black' }}>
      <>
        {data && (
          <DataGrid
            sx={{ background: 'rgb(5, 30, 52)' }}
            rows={rows as GridRowsProp}
            columns={columns}
          />
        )}
      </>
    </div>
  );
};

export default Nations;
