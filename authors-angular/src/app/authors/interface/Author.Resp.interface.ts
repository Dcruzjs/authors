export interface AuthorsResp {
    authors: AuthorResponse[];
}
export interface AuthorResp {
    author: AuthorResponse;
}

export interface AuthorResponse {
    _id:         string;
    name:       string;
    createdAt?:   Date;
    updatedAt?:   Date;
    __v?:         number;
}
