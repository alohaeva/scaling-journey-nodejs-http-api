import { StatusCode } from 'status-code-enum';

export type ErrorResult = {
  success: false;
  status: StatusCode;
  error: {
    code: number;
    message: string;
  };
};

export type SuccessResult<T> = {
  success: true;
  status: StatusCode;
  result?: T;
  cookie?: Record<string, { value: string; expire: number }>;
};

type IsAny<T> = unknown extends T ? ([keyof T] extends [never] ? false : true) : false;

export type PathImpl<T, Key extends keyof T> = Key extends string
  ? IsAny<T[Key]> extends true
    ? never
    : T[Key] extends Record<string, any>
      ?
          | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
          | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
      : never
  : never;

export type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;

export type Path<T> = keyof T extends string
  ? PathImpl2<T> extends infer P
    ? P extends string | keyof T
      ? P
      : keyof T
    : keyof T
  : never;

export type PathValue<T, P extends Path<T>> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
    ? T[P]
    : never;
