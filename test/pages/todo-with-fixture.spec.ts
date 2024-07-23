import { test } from './fixtures';
import { TodoPage } from './todo.page';

// const base = test.extend<{ todoPage: TodoPage }>({
//   todoPage: async ({ page }, use) => {
//     const todoPage = new TodoPage(page);
//     await todoPage.goto();
//     await todoPage.addToDo('item1');
//     await todoPage.addToDo('item2');
//     await use(todoPage);
//     await todoPage.removeAll();
//   },
// });

test.beforeEach(async ({ settingsPage }) => {
  await settingsPage.switchToDarkMode();
});

test.describe('todo tests', () => {

  test.beforeEach(async ({ page, todoPage }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');
  });

  test.afterEach(async ({ todoPage }) => {
    await todoPage.removeAll();
  });

  test('should add an item', async ({ todoPage }) => {
    await todoPage.addToDo('my item');
  });

  test('should remove an item', async ({ todoPage }) => {
    await todoPage.remove('item1');
  });
});