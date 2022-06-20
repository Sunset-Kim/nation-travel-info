import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import config from '../config';
import { NationsResponse } from './types/NationsServicesType';

class NationService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://apis.data.go.kr/1262000/TravelAlarmService2',
      timeout: 1000,
    });
  }

  getTravelAlarmList(): Promise<AxiosResponse<NationsResponse>> {
    return new Promise((resolve, reject) => {
      this.axios
        .get<AxiosResponse<NationsResponse>>('getTravelAlarmList2', {
          params: {
            serviceKey: config.APIKEY,
            numOfRows: 197,
            returnType: 'JSON',
            pageNo: 1,
          },
        })
        .then((res) => resolve(res.data))
        .catch((err: AxiosError) => {
          reject({
            error: 'Error',
            msg: 'API ERROR',
          });
        });
    });
  }
}

export default new NationService();
