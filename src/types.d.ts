export interface Post {
    id: any;
    date: string;
    title: string;
}
export interface PostList {
    [id: string] : Post;
}
export interface PostInfo {
    id: string;
    date: string;
    title: string;
    message: string;
}
export interface NewPost {
    title: string;
    date: string;
    message: string
}
export interface Contacts {
    text: string;
}