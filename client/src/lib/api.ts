export async function getOneTeaCards(id: number) {
  const response = await fetch(`http://localhost:4000/teas/${id}`, {
    next: { revalidate: 600 },
  });
  const { data } = await response.json();
  return data;
}
