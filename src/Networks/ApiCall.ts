import Axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import { AppConfig } from './AppConfig';
// import { getToken, logout, showToast } from '../Utils/Utility';
// import { ToastType } from '../Utils/Const';
import Loader from '../Utils/AppLoader';
import { getToken } from '../Components/Function/handler';

const axiosInstance = Axios.create({
  baseURL: AppConfig.baseUrl,
  timeout: 10000,
});

const getFormData = (object: { [key: string]: any }) => {
  const formData = new FormData();
  Object.keys(object).forEach(key => {
    if (
      object[key] !== undefined &&
      object[key] !== null &&
      object[key] !== ''
    ) {
      if (Array.isArray(object[key])) {
        object[key].forEach((item: any) => {
          formData.append(key, item);
        });
      } else {
        formData.append(key, object[key]);
      }
    }
  });
  return formData;
};

axiosInstance.interceptors.request.use(
  async config => {
    // console.log(`axios request : ${config?.url} =>`, config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  async response => {
    // console.log(
    //   `<= Response : ${response?.config?.url} : Status - ${response?.status} `,
    //   response.data,
    // );
    Loader.isLoading(false);

    return Promise.resolve(response);
  },
  async error => {
    // console.log(
    //   `<== Response Error : ${error?.config?.url} : Status - ${error?.status} `,
    //   error.response,
    // );
    Loader.isLoading(false);
    if (error?.status === 401) {
      // showToast(ToastType.error, 'Session expired, please login again');
      // logout();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export interface APICallParams {
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
  payload?: any;
  url: string;
  headers?: AxiosRequestHeaders;
  removeLoader?: boolean;
  formData?: boolean;
  removeToast?: boolean;
  contentType?: string;
  removeToken?: boolean;
}

const APICall = async <T>({
  method = 'post',
  payload = null,
  url = '',
  removeLoader = false,
  formData = false,
  contentType = '',
  removeToken = false,
}: APICallParams): Promise<AxiosResponse<T>> => {
  if (!removeLoader) {
    Loader.isLoading(true);
  }

  const config: AxiosRequestConfig = {
    method: method.toLowerCase(),
    url,
  };

  if (contentType) {
    config.headers = {
      ...config.headers,
      'Content-Type': contentType,
    };
  }

  if (!removeToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${getToken()}`,
    };
  }

  if (payload && method.toLowerCase() === 'get') {
    config.params = payload;
  } else if (
    payload &&
    (method.toLowerCase() === 'post' ||
      method.toLowerCase() === 'put' ||
      method.toLowerCase() === 'patch')
  ) {
    if (formData) {
      config.data = getFormData(payload);
    } else {
      config.data = payload;
    }
  }
  // console.log('API details: ', method, payload, url, config);

  return new Promise((resolve, reject) => {
    axiosInstance(config)
      .then(res => {
        if (res.status.toString().startsWith('2')) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch(error => {
        if (error) {
          reject(error.response);
        }
        reject({
          statusCode: 500,
          data: {
            message: error.message ?? error.error ?? 'Something went wrong!',
          },
        });
      });
  });
};

export default APICall;
