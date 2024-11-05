function escapePyramidHead(room) {
  const n = room.length;
  let start, target;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (room[i][j] === '▲') start = [i, j];
      if (room[i][j] === 'T') target = [i, j];
    }
  }

  if (!start || !target) return -1;

  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ];

  const queue = [[...start, 0]];
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();

    if (x === target[0] && y === target[1]) return steps;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && room[nx][ny] !== '#') {
        visited[nx][ny] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  return -1;
}
