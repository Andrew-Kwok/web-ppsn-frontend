export interface AuthorProps {
    full_name: string;
}

export interface NewsProps {
    id: number;    
    headline: string;
    picture: string;
    content: string;    
    pub_date:    string;
    upd_date: string;
    authors: AuthorProps[];
}