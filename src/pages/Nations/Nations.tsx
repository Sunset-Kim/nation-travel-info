import React, { useMemo, useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import NationService from '../../services/NationService';
import reactQueryConfig from '../../configs/ReactqueryConfig';
import { NationsResponse } from '../../services/types/NationsServicesType';
import { Avatar, Paper, Typography } from '@mui/material';
import NationDialog from '@components/Dialog/NationDialog';

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
  const [open, setOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const { data, isError, isLoading } = useQuery(
    ['@nations'],
    () => nationsService.getTravelAlarmList(),
    reactQueryConfig
  );
  const handleClickImg = (url: string) => {
    openPopup(url);
  };
  const openPopup = (url: string) => {
    setImgUrl(url);
    setOpen(true);
  };
  const closePopup = () => setOpen(false);

  const rows = data && makeNationRow(data as NationsResponse);
  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'ISO 코드',
        width: 80,
        align: 'center',
        headerAlign: 'center',
      },
      {
        field: '나라이름',
        headerName: '나라이름',
        width: 170,
        renderCell: (param) => {
          return (
            <>
              <Avatar
                src={param.row.국기}
                alt={param.row.나라이름영문}
                sx={{ width: 24, height: 24, marginRight: 1 }}
              />
              <Typography>{param.row.나라이름}</Typography>
            </>
          );
        },
      },
      {
        field: '대륙이름',
        headerName: '대륙이름',
        width: 100,
        align: 'center',
        headerAlign: 'center',
      },
      {
        field: '경보단계',
        headerName: '경보단계',
        width: 70,
        align: 'center',
        headerAlign: 'center',
      },
      {
        field: '지역유형',
        headerName: '지역유형',
        width: 100,
        align: 'center',
        headerAlign: 'center',
      },
      {
        field: '작성일',
        headerName: '작성일',
        width: 100,
        type: 'date',
        align: 'center',
        headerAlign: 'center',
      },
      {
        field: '위험지도',
        headerName: '위험지도',
        align: 'center',
        headerAlign: 'center',
        flex: 200,

        renderCell: (param) =>
          param.row.위험지도 && (
            <Avatar
              sx={{
                width: 180,
                height: 180,
                borderRadius: 0,
              }}
              onClick={() => handleClickImg(param.row.위험지도)}
              src={param.row.위험지도}
              alt={'위험지도'}
            />
          ),
      },
    ],
    [handleClickImg]
  );

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 3,
        }}
      >
        국가별 여행 경보상황
      </Typography>
      {data && (
        <DataGrid
          getRowHeight={() => 'auto'}
          sx={{ background: 'rgb(5, 30, 52)', height: '80vh' }}
          rows={rows as GridRowsProp}
          columns={columns}
        />
      )}
      <NationDialog open={open} onClose={closePopup} imgUrl={imgUrl} />
    </>
  );
};

export default Nations;
