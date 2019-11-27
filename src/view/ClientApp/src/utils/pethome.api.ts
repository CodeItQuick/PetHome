﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.1.3.0 (NJsonSchema v10.0.27.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class AnimalQueriesClient {
  private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
    this.http = http ? http : <any>window;
    this.baseUrl = baseUrl ? baseUrl : "https://localhost:44300";
  }

  getAll(): Promise<AnimalSummary[]> {
    let url_ = this.baseUrl + "/animals";
    url_ = url_.replace(/[?&]$/, "");

    let options_ = <RequestInit>{
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processGetAll(_response);
    });
  }

  protected processGetAll(response: Response): Promise<AnimalSummary[]> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AnimalSummary.fromJS(item));
        }
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<AnimalSummary[]>(<any>null);
  }

  get(id: string): Promise<AnimalDetails> {
    let url_ = this.baseUrl + "/animals/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    let options_ = <RequestInit>{
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processGet(_response);
    });
  }

  protected processGet(response: Response): Promise<AnimalDetails> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = AnimalDetails.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<AnimalDetails>(<any>null);
  }
}

export class AnimalCommandsClient {
  private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
    this.http = http ? http : <any>window;
    this.baseUrl = baseUrl ? baseUrl : "https://localhost:44300";
  }

  registerNewAnimal(model: RegisterAnimalInputModel): Promise<string> {
    let url_ = this.baseUrl + "/animal/register";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(model);

    let options_ = <RequestInit>{
      body: content_,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processRegisterNewAnimal(_response);
    });
  }

  protected processRegisterNewAnimal(response: Response): Promise<string> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : <any>null;
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<string>(<any>null);
  }
}

export class AuthClient {
  private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
    this.http = http ? http : <any>window;
    this.baseUrl = baseUrl ? baseUrl : "https://localhost:44300";
  }

  /**
   * Login
   */
  login(login: LoginData): Promise<FileResponse> {
    let url_ = this.baseUrl + "/api/Auth/login";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(login);

    let options_ = <RequestInit>{
      body: content_,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/octet-stream"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processLogin(_response);
    });
  }

  protected processLogin(response: Response): Promise<FileResponse> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<FileResponse>(<any>null);
  }

  /**
   * Register
   */
  register(register: LoginData): Promise<FileResponse> {
    let url_ = this.baseUrl + "/api/Auth/register";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(register);

    let options_ = <RequestInit>{
      body: content_,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/octet-stream"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processRegister(_response);
    });
  }

  protected processRegister(response: Response): Promise<FileResponse> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<FileResponse>(<any>null);
  }
}

export class AnimalSummary implements IAnimalSummary {
  id?: string;
  species?: string | undefined;
  entered?: Date;
  color?: string | undefined;
  breed?: string | undefined;
  gender?: string | undefined;
  weight?: number;
  tag?: string | undefined;
  circumstances?: string | undefined;
  vetRequired?: boolean;

  constructor(data?: IAnimalSummary) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.species = _data["species"];
      this.entered = _data["entered"] ? new Date(_data["entered"].toString()) : <any>undefined;
      this.color = _data["color"];
      this.breed = _data["breed"];
      this.gender = _data["gender"];
      this.weight = _data["weight"];
      this.tag = _data["tag"];
      this.circumstances = _data["circumstances"];
      this.vetRequired = _data["vetRequired"];
    }
  }

  static fromJS(data: any): AnimalSummary {
    data = typeof data === 'object' ? data : {};
    let result = new AnimalSummary();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["species"] = this.species;
    data["entered"] = this.entered ? this.entered.toISOString() : <any>undefined;
    data["color"] = this.color;
    data["breed"] = this.breed;
    data["gender"] = this.gender;
    data["weight"] = this.weight;
    data["tag"] = this.tag;
    data["circumstances"] = this.circumstances;
    data["vetRequired"] = this.vetRequired;
    return data;
  }
}

export interface IAnimalSummary {
  id?: string;
  species?: string | undefined;
  entered?: Date;
  color?: string | undefined;
  breed?: string | undefined;
  gender?: string | undefined;
  weight?: number;
  tag?: string | undefined;
  circumstances?: string | undefined;
  vetRequired?: boolean;
}

export class AnimalDetails implements IAnimalDetails {
  id?: string;
  species?: string | undefined;
  entered?: Date;
  color?: string | undefined;
  breed?: string | undefined;
  gender?: string | undefined;
  weight?: number;
  tag?: string | undefined;
  circumstances?: string | undefined;
  vetRequired?: boolean;
  notes?: string | undefined;

  constructor(data?: IAnimalDetails) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.species = _data["species"];
      this.entered = _data["entered"] ? new Date(_data["entered"].toString()) : <any>undefined;
      this.color = _data["color"];
      this.breed = _data["breed"];
      this.gender = _data["gender"];
      this.weight = _data["weight"];
      this.tag = _data["tag"];
      this.circumstances = _data["circumstances"];
      this.vetRequired = _data["vetRequired"];
      this.notes = _data["notes"];
    }
  }

  static fromJS(data: any): AnimalDetails {
    data = typeof data === 'object' ? data : {};
    let result = new AnimalDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["species"] = this.species;
    data["entered"] = this.entered ? this.entered.toISOString() : <any>undefined;
    data["color"] = this.color;
    data["breed"] = this.breed;
    data["gender"] = this.gender;
    data["weight"] = this.weight;
    data["tag"] = this.tag;
    data["circumstances"] = this.circumstances;
    data["vetRequired"] = this.vetRequired;
    data["notes"] = this.notes;
    return data;
  }
}

export interface IAnimalDetails {
  id?: string;
  species?: string | undefined;
  entered?: Date;
  color?: string | undefined;
  breed?: string | undefined;
  gender?: string | undefined;
  weight?: number;
  tag?: string | undefined;
  circumstances?: string | undefined;
  vetRequired?: boolean;
  notes?: string | undefined;
}

export class RegisterAnimalInputModel implements IRegisterAnimalInputModel {
  species?: string | undefined;
  color?: string | undefined;
  breed?: string | undefined;
  gender?: string | undefined;
  weight?: number;
  tagNumber?: string | undefined;
  circumstances?: string | undefined;
  vetRequired?: boolean;
  notes?: string | undefined;

  constructor(data?: IRegisterAnimalInputModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.species = _data["species"];
      this.color = _data["color"];
      this.breed = _data["breed"];
      this.gender = _data["gender"];
      this.weight = _data["weight"];
      this.tagNumber = _data["tagNumber"];
      this.circumstances = _data["circumstances"];
      this.vetRequired = _data["vetRequired"];
      this.notes = _data["notes"];
    }
  }

  static fromJS(data: any): RegisterAnimalInputModel {
    data = typeof data === 'object' ? data : {};
    let result = new RegisterAnimalInputModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["species"] = this.species;
    data["color"] = this.color;
    data["breed"] = this.breed;
    data["gender"] = this.gender;
    data["weight"] = this.weight;
    data["tagNumber"] = this.tagNumber;
    data["circumstances"] = this.circumstances;
    data["vetRequired"] = this.vetRequired;
    data["notes"] = this.notes;
    return data;
  }
}

export interface IRegisterAnimalInputModel {
  species?: string | undefined;
  color?: string | undefined;
  breed?: string | undefined;
  gender?: string | undefined;
  weight?: number;
  tagNumber?: string | undefined;
  circumstances?: string | undefined;
  vetRequired?: boolean;
  notes?: string | undefined;
}

export class LoginData implements ILoginData {
  email!: string;
  password!: string;

  constructor(data?: ILoginData) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.email = _data["email"];
      this.password = _data["password"];
    }
  }

  static fromJS(data: any): LoginData {
    data = typeof data === 'object' ? data : {};
    let result = new LoginData();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["email"] = this.email;
    data["password"] = this.password;
    return data;
  }
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface FileResponse {
  data: Blob;
  status: number;
  fileName?: string;
  headers?: { [name: string]: any };
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
  if (result !== null && result !== undefined)
    throw result;
  else
    throw new ApiException(message, status, response, headers, null);
}