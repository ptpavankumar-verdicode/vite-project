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
}

export const usePostStore = create<PostState>((set: (arg0: { loading: boolean; posts?: any; }) => void) => ({
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
}));
