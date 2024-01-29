export type ApiResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ResponseData;
  etag: string;
};

export type ApiRequest = {
  title: string;
  limit?: number;
  offset?: number;
};

export interface PaginationInfo {
  limit: number;
  total: number;
}

export interface ResponseData extends PaginationInfo {
  results: Comic[];
}

export type RequestResults = {
  pagination: PaginationInfo;
  results: Comic[];
};

export type ContentProps = {
  data: RequestResults | undefined;
  isFetching?: boolean;
  isError?: boolean;
  limit?: number;
  notFoundMessage?: string;
};

export type ComicPrice = {
  type: string;
  price: number;
};

export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: [
    {
      type: string;
      language: string;
      text: string;
    }
  ];
  resourceURI: string;
  urls: [
    {
      type: string;
      url: string;
    }
  ];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  collections: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  collectedIssues: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  dates: [
    {
      type: string;
      date: Date;
    }
  ];
  prices: ComicPrice[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: [
    {
      path: string;
      extension: string;
    }
  ];
};

export type CustomError = {
  message?: string;
};
