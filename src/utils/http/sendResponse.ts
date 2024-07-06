import { StatusCode } from 'status-code-enum';
import { Response } from 'express';

type ErrorResult = {
  success: false;
  status: StatusCode;
  error: {
    code: number;
    message: string;
  };
};

type SuccessResult<T> = {
  success: true;
  status: StatusCode;
  result?: T;
  cookie?: Record<string, { value: string; expire: number }>;
};

export const sendResponse = <T>(res: Response, responseParams: SuccessResult<T> | ErrorResult) => {
  if (responseParams.success) {
    if (responseParams.cookie) {
      Object.entries(responseParams.cookie).forEach(entry => {
        res.cookie(entry[0], entry[1].value, {
          maxAge: entry[1].expire,
          secure: true,
          httpOnly: true,
        });
      });
    }

    return res.status(responseParams.status).json({
      success: true,
      result: responseParams.result,
    });
  }

  return res.status(responseParams.status).json({
    success: false,
    error: responseParams.error,
  });
};
