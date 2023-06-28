export interface AuthorProps {
    full_name: string;
}

export interface NewsProps {
    id: number;    
    headline: string;
    picture: string;
    content: string;    
    created_at: string;
    updated_at: string;
    authors: AuthorProps[];
}

export interface NewsPagination {
    count: number;
    next: string;
    previous: string;
    results: NewsProps[];
}