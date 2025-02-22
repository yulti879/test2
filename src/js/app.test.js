import { initGame } from './app';

beforeEach(() => {
  // Создаём элементы DOM перед каждым тестом
  document.body.innerHTML = `
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  `;
});

test('initGame should append goblin to a cell', () => {
  initGame();
  const goblin = document.querySelector('.goblin');
  expect(goblin).not.toBeNull(); // Проверяем, что гоблин добавлен
});

test('goblin should move to a new cell after interval', () => {
  // Мокируем таймеры
  jest.useFakeTimers();

  initGame();

  const goblin = document.querySelector('.goblin');
  const initialCell = goblin.parentElement; // Сохраняем начальную ячейку

  // Перемещаем время вперёд на 1200 мс
  jest.advanceTimersByTime(1200);

  const newCell = goblin.parentElement; // Получаем новую ячейку

  console.log('Initial cell:', initialCell.innerHTML);
  console.log('New cell:', newCell.innerHTML);

  // Проверяем, что гоблин переместился
  expect(newCell).not.toBe(initialCell); // Проверяем, что гоблин переместился

  // Восстанавливаем настоящие таймеры
  jest.useRealTimers();
});