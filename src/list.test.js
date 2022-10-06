import Item from './modules/listItem.js';
import List from './modules/list.js';

describe('App logic', () => {
  const list = new List(Item, 'testing list', 'test list sto');
  test('Expect addItem to increase list length', () => {
    const listLength = list.list.length;
    list.addItem('Hola');
    expect(list.list.length).toBe(listLength + 1);
  });
  test('Expect removeItem to increase list length', () => {
    const listLength = list.list.length;
    list.removeItemByIndex(0);
    expect(list.list.length).toBe(listLength - 1);
  });
});

describe('DOM Tests', () => {
  jest.mock('./index');
  test('Expect addItem to add to DOM', () => {
    const list1 = new List(Item, 'testing list0', 'test list sto0');
    document.body.innerHTML = '<div><ul id="list"></ul></div>';
    const item = (list1.addItem('Task 1')).template();
    document.querySelector('#list').appendChild(item);
    const check = document.querySelectorAll('#list li');
    expect(check).toHaveLength(1);
  });

  test('Expect removeItem to remove from DOM', () => {
    const list1 = new List(Item, 'testing list3', 'test list sto3');
    document.body.innerHTML = '<div><ul id="list"></ul></div>';
    const item = list1.addItem('Task 1').template();
    document.querySelector('#list').appendChild(item).remove();
    const check = document.querySelectorAll('#list li');
    expect(check).toHaveLength(0);
  });
});