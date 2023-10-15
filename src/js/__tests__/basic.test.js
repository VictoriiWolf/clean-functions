import { showHealth, sortUsers } from '../app.js';

test('should show state > 50', () => {
    const state = showHealth({ health: 80 });
    expect(state).toBe('healthy');
});

test('should show state between 15 and 50', () => {
    const state = showHealth({ health: 40});
    expect(state).toBe('wounded');
})

test('should show state < 15', () => {
    const state = showHealth({ health: 10 });
    expect(state).toBe('critical');
})

test('function should return sorting array', () => {
    const sortingArray = sortUsers([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ])
    expect(sortingArray).toEqual([
        {name: 'мечник', health: 10},
        {name: 'лучник', health: 80},
        {name: 'маг', health: 100},
      ])
})