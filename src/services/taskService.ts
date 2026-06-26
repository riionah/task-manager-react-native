export async function fetchTasks() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );

  const data = await res.json();

  return data.map((t: any) => ({
    id: t.id.toString(),
    title: t.title,
    description: '',
    completed: t.completed,
    createdDate: new Date().toLocaleDateString(),
  }));
}