import { create } from 'zustand';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  fetchPosts: () => Promise<void>;
  createPost: (newPost: any) => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  loading: false,
  fetchPosts: async () => {
    set({ loading: true });
    try {
        setTimeout(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            set({ posts: data, loading: false });
        }, 10000);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      set({ loading: false });
    }
  },
  createPost: async (newPost: any) => {
    set({ loading: true });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const createdPost = await response.json();
      
      set((state) => {
        return ({
          posts: [...state.posts, createdPost],
          loading: false,
        });
      });
    } catch (error) {
      console.error('Failed to create post:', error);
      set({ loading: false });
    }
  },
}));
