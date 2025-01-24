import { usePostStore } from "../stores/usePostStore";

export function PostDataTable() {
  const { posts, loading, fetchPosts } = usePostStore();
  if (loading) {
    return <div>
                <button onClick={fetchPosts}>Fetch Posts</button>
                <div>Loading...</div>
            </div>;
  }
  return (
    <div>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}