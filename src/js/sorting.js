export default function sort(array) {
  array.sort((a, b) => b.health - a.health);
  return (array);
}
