export function generateId() {
  return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
}
